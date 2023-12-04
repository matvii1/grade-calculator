import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC, ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import { NameOptions, NumberFormSchema } from "../schema";

type SelectProps = {
  name: NameOptions;
  label: string;
  selectContent: ReactNode;
  isInt?: boolean;
};

const SelectControl: FC<SelectProps> = ({
  name,
  label,
  selectContent,
  isInt = false,
}) => {
  const { control } = useFormContext<NumberFormSchema>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select
            onValueChange={
              isInt
                ? (value) => field.onChange(parseInt(value))
                : field.onChange
            }
            defaultValue={`${field.value}`}
          >
            <FormControl>
              <SelectTrigger className="w-[100%]">
                <SelectValue placeholder="Desired grade" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>{selectContent}</SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};

export default SelectControl;
