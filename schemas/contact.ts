import { z } from "zod";

export const contactSchema = z.object({
  Name: z.string().min(2, "Name is required"),
  "E-mail": z.string().email("Invalid email address"),
  Message: z.string().min(5, "Message is too short"),
});

export type ContactForm = z.infer<typeof contactSchema>;
