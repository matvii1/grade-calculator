import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";
import { Control } from "react-hook-form";

interface NumberInputProps {
  control: Control<
    {
      number: number;
      desiredGrade: number;
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
          <Select
            onValueChange={(value) => field.onChange(parseInt(value))}
            defaultValue={`${field.value}`}
          >
            <FormControl>
              <SelectTrigger className="w-[100%]">
                <SelectValue placeholder="Desired grade" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="6">6</SelectItem>
              <SelectItem value="7">7</SelectItem>
              <SelectItem value="8">8</SelectItem>
              <SelectItem value="9">9</SelectItem>
              <SelectItem value="10">10</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};

export default NumberInput;
