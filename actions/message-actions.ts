"use server";

import { createMessage } from "@/prisma/db/message-db";
import { messageSchema } from "@/schema/message-schema";
import { sendMessageEmail } from "./emails";
import * as z from "zod";

export async function createMessageAction(values: z.infer<typeof messageSchema>) {
  const parsedSchema = messageSchema.safeParse(values);

  if (!parsedSchema.success) return { data: null, error: "Invalid Fields" };

  const createdMessage = await createMessage(parsedSchema.data);
  const { data, error } = await sendMessageEmail(values);
  if (error || createdMessage.error) return { data: null, error: error || createdMessage.error };
  return createdMessage;
}
