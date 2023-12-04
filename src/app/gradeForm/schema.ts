import { z } from "zod";

export const GradeSchema = z.object({
  grade: z.coerce
    .number()
    .nonnegative("Grade can't be negative")
    .max(100)
    .optional(),
  percentage: z.coerce
    .number()
    .max(100)
    .nonnegative("Percentage can't be negative")
    .optional(),
});

export type GradeData = {
  grade: number;
  percentage: number;
};

export type GradeFormData = {
  grades: GradeData[];
};
export type ComposedGradeFormData = {
  composedGrades: { grade: number; percentage: number }[];
};
