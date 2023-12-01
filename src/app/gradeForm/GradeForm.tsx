import FormHeader from "@/components/FormHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getCurrentGrade } from "@/lib/getCurrentGrade";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type GradeFormProps = {
  numberOfForms: number;
  setCalculatedGrade: (grade: number) => void;
};

export type GradeFormData = {
  grades: { grade: number; percentage: number }[];
};

const GradeForm: FC<GradeFormProps> = ({
  numberOfForms,
  setCalculatedGrade,
}) => {
  const array = useMemo(
    () => new Array(+numberOfForms).fill(0),
    [numberOfForms],
  );

  console.log(array);

  const GradeSchema = z.object({
    grade: z.coerce
      .number()
      .nonnegative("Grade can't be negative")
      .max(100)
      .optional(),
    percentage: z.coerce
      .number()
      .max(100)
      .nonnegative("Percentage can't be negative"),
  });

  const DynamicSchema = z.object({
    grades: z.array(GradeSchema).refine(
      (data) => {
        console.log(data, numberOfForms);

        return data.length === numberOfForms;
      },
      {
        message: `Array must contain exactly ${numberOfForms} elements`,
      },
    ),
  });

  const gradeMethods = useForm<GradeFormData>({
    resolver: zodResolver(DynamicSchema),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = gradeMethods;
  console.log(errors.grades);

  function onSubmit(data: GradeFormData) {
    console.log("submitted");

    const currentGrade = getCurrentGrade(data);

    setCalculatedGrade(currentGrade);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormHeader />

      {array.map((_, i) => (
        <div className="mt-4 flex gap-2" key={i}>
          <div className="flex-1">
            <Input
              type="number"
              placeholder="Enter your grade"
              {...register(`grades.${i}.grade`)}
            />
            {errors.grades?.[i]?.grade?.message && (
              <p className="pl-2 pt-1 text-xs text-red-700">
                {errors.grades?.[i]?.grade?.message}
              </p>
            )}
          </div>

          <div className="flex-1">
            <Input
              type="number"
              placeholder="Weights"
              {...register(`grades.${i}.percentage`)}
            />
            {errors.grades?.[i]?.percentage?.message && (
              <p className="pl-2 pt-1 text-xs text-red-700">
                {errors.grades?.[i]?.percentage?.message}
              </p>
            )}
          </div>
        </div>
      ))}

      <div className="flex justify-end">
        <Button type="submit" className="mt-4">
          Calculate
        </Button>
      </div>
    </form>
  );
};

export default GradeForm;
