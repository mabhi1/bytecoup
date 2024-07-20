import prisma from "../prisma";

export async function getFeedbackTokenById(id: string) {
  try {
    const token = await prisma.feedbackToken.findUnique({ where: { id } });
    if (!token) throw new Error("Unable to find token");
    return { data: token, error: null };
  } catch (error) {
    return { data: null, error };
  }
}

export async function closeFeedbackTokenById(id: string, feedbackId: string) {
  try {
    const token = await prisma.feedbackToken.update({ where: { id }, data: { status: "closed", feedbackId } });
    if (!token) throw new Error("Unable to find token");
    return { data: token, error: null };
  } catch (error) {
    return { data: null, error };
  }
}
