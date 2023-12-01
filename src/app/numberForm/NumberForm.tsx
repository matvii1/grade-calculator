import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, FC, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { NumberFormSchema, numberFormSchema } from "./schema";

type NumberFormProps = {
  setNumberOfForms: (num: number) => void;
  setTriggerRemount: Dispatch<SetStateAction<boolean>>;
};

const NumberForm: FC<NumberFormProps> = ({
  setNumberOfForms,
  setTriggerRemount,
}) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<NumberFormSchema>({
    resolver: zodResolver(numberFormSchema),
  });

  function onNumberSubmit(data: NumberFormSchema) {
    setNumberOfForms(data.number);
    setTriggerRemount((prev) => !prev);
  }

  const hasErrors = Boolean(errors.number?.message);

  return (
    <form onSubmit={handleSubmit(onNumberSubmit)}>
      <div className="mb-1 flex flex-wrap items-center gap-1 pl-2">
        <p className="text-sm font-semibold">
          Number of subjects{" "}
          <span className="text-xs font-light">(Choose between 1 and 10)</span>
        </p>
      </div>

      <Input
        placeholder="Choose number of subjects"
        type="number"
        {...register("number")}
        variant={errors.number?.message ? "destructive" : "default"}
      />
      {errors.number?.message && (
        <p className="pl-2 pt-2 text-sm font-semibold text-red-700">
          {errors.number.message}
        </p>
      )}

      <div className="mt-2 flex justify-end">
        <Button type="submit" variant="outline" disabled={hasErrors}>
          Proceed
        </Button>
      </div>
    </form>
  );
};

export default NumberForm;
