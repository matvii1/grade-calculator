import { z } from "zod";

export const numberFormSchema = z.object({
  number: z.coerce
    .number()
    .min(0, "Must be greater than than zero")
    .max(10, "I would not be able to handle it!"),
});

export type NumberFormSchema = z.infer<typeof numberFormSchema>;
