"use server";

import { createCareer } from "@/prisma/db/careers-db";
import { careersSchema } from "@/schema/careers-schema";
import * as z from "zod";

export async function createCareerAction(values: z.infer<typeof careersSchema>, resumeText: string) {
  const parsedSchema = careersSchema.safeParse(values);

  if (!parsedSchema) return { data: null, error: "Invalid Fields" };

  const createdCareer = await createCareer({ ...values, resumeText });
  return createdCareer;
}
