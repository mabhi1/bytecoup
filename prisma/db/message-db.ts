import { NewMessageDbType } from "@/lib/types/message-types";
import prisma from "../prisma";

export async function createMessage(message: NewMessageDbType) {
  try {
    const createdMessage = await prisma.message.create({ data: message });
    return { data: createdMessage, error: null };
  } catch (error) {
    return { data: null, error };
  }
}
