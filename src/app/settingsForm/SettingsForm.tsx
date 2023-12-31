import { Button } from "@/common/components/ui/button";
import { Form } from "@/common/components/ui/form";
import { SelectItem } from "@/common/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { GRADES, Grades, gradesArr } from "../../common/lib/grades";
import SelectControl from "./components/SelectControl";
import { NumberFormSchema, defaultValues, numberFormSchema } from "./schema";
import { useGradeContext } from "../context/useGradeContext";

const SettingsForm: FC = () => {
  const { setNumberOfForms, setDesiredGrade, setTriggerRemount } =
    useGradeContext();
  const numberMethods = useForm<NumberFormSchema>({
    resolver: zodResolver(numberFormSchema),
    defaultValues,
  });

  const { handleSubmit } = numberMethods;

  function onNumberSubmit(data: NumberFormSchema) {
    setNumberOfForms(data.number);
    setDesiredGrade(data.desiredGrade as Grades);
    setTriggerRemount((prev) => !prev);
  }

  return (
    <Form {...numberMethods}>
      <form
        onSubmit={handleSubmit(onNumberSubmit)}
        className="flex flex-col gap-2"
      >
        <SelectControl
          name="number"
          label="Number of assignments"
          isInt={true}
          selectContent={
            <>
              {new Array(10).fill(0).map((_, i) => (
                <SelectItem key={i} value={`${i + 1}`}>
                  {i + 1}
                </SelectItem>
              ))}
            </>
          }
        />

        <SelectControl
          name="desiredGrade"
          label="Desired grade"
          selectContent={
            <>
              {gradesArr.map((grade) => (
                <SelectItem value={grade} key={grade}>
                  {GRADES[grade]}
                </SelectItem>
              ))}
            </>
          }
        />

        <div className="mt-2 flex justify-end">
          <Button type="submit" variant="outline">
            Apply changes
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SettingsForm;
