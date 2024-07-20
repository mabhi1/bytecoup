"use server";

import { createFeedback } from "@/prisma/db/feedback-db";
import { closeFeedbackTokenById } from "@/prisma/db/feedback-token-db";
import { feedbackSchema } from "@/schema/feedback-schema";
import { revalidatePath } from "next/cache";
import * as z from "zod";

export async function createFeedbackAction(values: z.infer<typeof feedbackSchema>, tokenId: string) {
  const parsedSchema = feedbackSchema.safeParse(values);

  if (!parsedSchema) return { data: null, error: "Invalid Fields" };

  const createdFeedback = await createFeedback({ ...values, tokenId, showOnSite: false });

  if (createdFeedback.data && !createdFeedback.error) {
    await closeFeedbackTokenById(tokenId, createdFeedback.data.id);
  }
  revalidatePath(`/feedback/${tokenId}`);
  return createdFeedback;
}
