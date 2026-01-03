import { z } from "zod";

export const contactSchema = z.object({
  Name: z.string().min(2, "nameIsRequired"),
  "E-mail": z.string().email("invalidEmail"),
  Message: z.string().min(5, "messageIsTooShort"),
});

export type ContactForm = z.infer<typeof contactSchema>;
