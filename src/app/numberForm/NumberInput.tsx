import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FC } from "react";
import { Control } from "react-hook-form";

interface NumberInputProps {
  control: Control<
    {
      number: number;
      desiredGrade: string;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
  >;
}

const NumberInput: FC<NumberInputProps> = ({ control }) => {
  return (
    <FormField
      control={control}
      name="number"
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            <p className="text-sm font-semibold">
              Number of assignments{" "}
              <span className="text-xs font-light">
                (Choose between 1 and 10)
              </span>
            </p>
          </FormLabel>
          <FormControl>
            <Input
              placeholder="Choose number of assignments"
              type="number"
              {...field}
              value={field.value}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default NumberInput;
