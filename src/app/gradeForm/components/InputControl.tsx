/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/common/components/ui/form";
import { Input } from "@/common/components/ui/input";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { GradeFormData } from "../schema";

interface InputControlProps {
  name: `grades.${number}.grade` | `grades.${number}.percentage` | any;
  placeholder: string
  disabled?: boolean;
}

const InputControl: FC<InputControlProps> = ({
  name,
  placeholder,
  disabled = false,
}) => {
  const { control } = useFormContext<GradeFormData>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              placeholder={placeholder}
              type="number"
              inputMode="numeric"
              className="mt-0"
              {...field}
              disabled={disabled}
            />
          </FormControl>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
};

export default InputControl;
