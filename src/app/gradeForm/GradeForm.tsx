import FormHeader from "@/common/components/FormHeader";
import { Button } from "@/common/components/ui/button";
import { Form } from "@/common/components/ui/form";
import { useToast } from "@/common/components/ui/use-toast";
import { getCurrentGrade } from "@/common/lib/getCurrentGrade";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import GradesList from "./components/GradesList";
import { GradeFormData, GradeSchema } from "./schema";
import { useGradeContext } from "../context/useGradeContext";

const GradeForm: FC = () => {
  const { numberOfForms, setCalculatedGrade, setIsGradeShown } =
    useGradeContext();
  const { toast } = useToast();

  const DynamicSchema = z.object({
    grades: z.array(GradeSchema).refine(
      (data) => {
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

  const { handleSubmit } = gradeMethods;

  function onSubmit(data: GradeFormData) {
    const currentGrade = getCurrentGrade(data.grades);

    if (currentGrade > 1) {
      setCalculatedGrade(currentGrade);
      setIsGradeShown(true);
    } else {
      toast({
        variant: "destructive",
        title: "Too bad :(",
        description: "Your grade is below 1%",
      });
    }
  }

  return (
    <Form {...gradeMethods}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormHeader />

        <GradesList numberOfForms={numberOfForms} />

        <div className="flex justify-end">
          <Button type="submit" className="mt-4">
            Calculate
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default GradeForm;
