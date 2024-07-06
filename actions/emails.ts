import resend from "@/resend/resend";
import { MessageTemplate } from "@/resend/email-templates/message-template";
import * as z from "zod";
import { messageSchema } from "@/schema/message-schema";

export async function sendMessageEmail(values: z.infer<typeof messageSchema>) {
  const { data, error } = await resend.emails.send({
    from: "Bytecoup <info@bytecoup.com>",
    to: [process.env.ADMIN_EMAIL!],
    reply_to: [values.email],
    text: values.message.toString(),
    subject: "Bytecoup Enquiry",
    react: MessageTemplate({
      senderName: `${values.firstName} ${values.lastName}`,
      senderEmail: values.email,
      message: values.message.toString(),
    }),
  });

  return { data, error };
}
