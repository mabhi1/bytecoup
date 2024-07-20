import { NewFeedbackDbType } from "@/lib/types/feedback-types";
import prisma from "../prisma";

export async function createFeedback(feedback: NewFeedbackDbType) {
  try {
    const createdFeedback = await prisma.feedback.create({ data: feedback });
    if (!createdFeedback) throw new Error("Feedback not created");
    return { data: createdFeedback, error: null };
  } catch (error) {
    return { data: null, error };
  }
}
