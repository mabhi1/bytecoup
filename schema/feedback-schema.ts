import * as z from "zod";

export const feedbackSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  companyName: z.string().min(1, { message: "Company Name is required" }),
  website: z.string().optional(),
  designation: z.string().min(1, { message: "Designation is required" }),
  email: z.string().min(1, { message: "Email is required" }),
  phone: z.string().optional(),
  overallSatisfaction: z
    .number()
    .int()
    .gte(1, { message: "Rating is required" })
    .lte(5, { message: "Rating is required" }),
  feedback: z.string().optional(),
  expectationMet: z.boolean().default(true),
  suggestions: z.string().optional(),
  reConsider: z.boolean().default(true),
  publishable: z.boolean().default(true),
});
