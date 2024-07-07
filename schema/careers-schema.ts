import * as z from "zod";

export const careersSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().min(1, { message: "Email is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});
