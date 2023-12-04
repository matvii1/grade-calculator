import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { getCurrentGrade } from "@/lib/getCurrentGrade";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { FC } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { ComposedGradeFormData, GradeFormData, GradeSchema } from "../schema";
import InputControl from "./InputControl";

interface ComposedGradeProps {
  onAddField: () => void;
  inputsNumber: number;
  index: number;
  clearComposedMenu: () => void;
}

const ComposedGrade: FC<ComposedGradeProps> = ({
  onAddField,
  inputsNumber,
  clearComposedMenu,
  index,
}) => {
  const { setValue } = useFormContext<GradeFormData>();

  const DynamicSchema = z.object({
    composedGrades: z.array(GradeSchema).refine(
      (data) => {
        return data.length === inputsNumber;
      },
      {
        message: `Array must contain exactly ${inputsNumber} elements`,
      },
    ),
  });

  const composedMethods = useForm<ComposedGradeFormData>({
    resolver: zodResolver(DynamicSchema),
  });

  const { handleSubmit } = composedMethods;

  function onSubmit(data: ComposedGradeFormData) {
    const currentGrade = getCurrentGrade(data.composedGrades);

    setValue(`grades.${index}.grade`, Math.round(currentGrade));
    clearComposedMenu();
  }

  return (
    <div>
      <Form {...composedMethods}>
        {new Array(inputsNumber).fill(0).map((_, i) => (
          <>
            <div className="mt-4 flex gap-2 pl-6">
              <div className="flex-1">
                <InputControl
                  name={`composedGrades.${i}.grade`}
                  placeholder="Enter your grade"
                />
              </div>

              <div className="flex-1">
                <InputControl
                  name={`composedGrades.${i}.percentage`}
                  placeholder="Enter weight"
                />
              </div>
            </div>
          </>
        ))}
      </Form>

      <div className="mt-3 flex justify-between">
        <Button variant="outline" onClick={handleSubmit(onSubmit)}>
          Calculate composed
        </Button>

        <Button
          variant="default"
          className="h-6 w-10 rounded-full"
          size="sm"
          type="button"
          onClick={onAddField}
        >
          <Plus size={20} />
        </Button>
      </div>
    </div>
  );
};

export default ComposedGrade;
