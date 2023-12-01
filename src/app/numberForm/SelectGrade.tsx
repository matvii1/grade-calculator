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
      desiredGrade: string;
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
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="w-[100%]">
                <SelectValue placeholder="Desired grade" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="64">D</SelectItem>
              <SelectItem value="69">D+</SelectItem>
              <SelectItem value="72">C-</SelectItem>
              <SelectItem value="76">C</SelectItem>
              <SelectItem value="79">C+</SelectItem>
              <SelectItem value="82">B-</SelectItem>
              <SelectItem value="86">B</SelectItem>
              <SelectItem value="89">B+</SelectItem>
              <SelectItem value="94">A-</SelectItem>
              <SelectItem value="100">A</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};

export default SelectGrade;
