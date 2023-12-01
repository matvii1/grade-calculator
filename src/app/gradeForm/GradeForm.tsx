import FormHeader from "@/components/FormHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { getCurrentGrade } from "@/lib/getCurrentGrade";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
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
  const { toast } = useToast()
  const array = new Array(+numberOfForms).fill(0);

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

  function onSubmit(data: GradeFormData) {
    const currentGrade = getCurrentGrade(data);

    if (currentGrade > 1) {
      setCalculatedGrade(currentGrade);
    } else {
      toast({
        variant: 'destructive',
        title: 'Something went wrong',
        description: 'Your grade is below 1%'
      })
    }
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
