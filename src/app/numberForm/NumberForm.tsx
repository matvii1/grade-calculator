import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, FC, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import NumberInput from "./NumberInput";
import SelectGrade from "./SelectGrade";
import { NumberFormSchema, defaultValues, numberFormSchema } from "./schema";

type NumberFormProps = {
  setNumberOfForms: (num: number) => void;
  setDesiredGrade: Dispatch<SetStateAction<string>>;
  setTriggerRemount: Dispatch<SetStateAction<boolean>>;
};

const NumberForm: FC<NumberFormProps> = ({
  setNumberOfForms,
  setTriggerRemount,
  setDesiredGrade,
}) => {
  const numberMethods = useForm<NumberFormSchema>({
    resolver: zodResolver(numberFormSchema),
    defaultValues,
  });

  const { handleSubmit, control } = numberMethods;

  function onNumberSubmit(data: NumberFormSchema) {
    setNumberOfForms(data.number);
    setDesiredGrade(data.desiredGrade);
    setTriggerRemount((prev) => !prev);
  }

  return (
    <Form {...numberMethods}>
      <form
        onSubmit={handleSubmit(onNumberSubmit)}
        className="flex flex-col gap-2"
      >
        <div>
          <NumberInput control={control} />
        </div>

        <div>
          <SelectGrade control={control} />
        </div>

        <div className="mt-2 flex justify-end">
          <Button type="submit" variant="outline">
            Apply changes
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NumberForm;
