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

interface SelectGradeProps {
  control: Control<
    {
      number: number;
      desiredGrade: number;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
  >;
}

const SelectGrade: FC<SelectGradeProps> = ({ control }) => {
  return (
    <FormField
      control={control}
      name="desiredGrade"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Desired grade</FormLabel>
          <Select
            onValueChange={value => field.onChange(parseInt(value))}
            defaultValue={`${field.value}`}
          >
            <FormControl>
              <SelectTrigger className="w-[100%]">
                <SelectValue placeholder="Desired grade" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="62">D</SelectItem>
              <SelectItem value="65">D+</SelectItem>
              <SelectItem value="70">C-</SelectItem>
              <SelectItem value="73">C</SelectItem>
              <SelectItem value="77">C+</SelectItem>
              <SelectItem value="80">B-</SelectItem>
              <SelectItem value="83">B</SelectItem>
              <SelectItem value="87">B+</SelectItem>
              <SelectItem value="90">A-</SelectItem>
              <SelectItem value="95">A</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};

export default SelectGrade;
