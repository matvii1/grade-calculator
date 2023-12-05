import { Button } from "@/common/components/ui/button";
import { cn } from "@/common/lib/utils";
import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { GradeFormData } from "../schema";
import ComposedGrade from "./ComposedGrade";
import InputControl from "./InputControl";

interface GradeItemProps {
  index: number;
}

const GradeItem: FC<GradeItemProps> = ({ index }) => {
  const { setValue } = useFormContext<GradeFormData>();

  const [isComposed, setIsComposed] = useState(false);
  const [inputsNumber, setInputsNumber] = useState(2);

  function onComposeClick() {
    setIsComposed(true);
    setValue(`grades.${index}.grade`, 0);
  }

  function onAddField() {
    setInputsNumber((prev) => (prev < 10 ? prev + 1 : prev));
  }

  function clearComposedMenu() {
    setIsComposed(false);
  }

  return (
    <div
      className={cn({
        "border-l-[1px] border-slate-400 pl-4": isComposed,
      })}
    >
      <div className="mt-4 flex gap-2">
        <div className="flex-1">
          <InputControl
            name={`grades.${index}.grade`}
            disabled={isComposed}
            placeholder="Enter your grade"
          />
        </div>

        <div className="flex-1">
          <InputControl
            name={`grades.${index}.percentage`}
            placeholder="Enter weight"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Button
          variant="link"
          size="sm"
          type="button"
          onClick={onComposeClick}
          disabled={isComposed}
        >
          Composed grade
        </Button>
      </div>

      {isComposed && (
        <ComposedGrade
          index={index}
          onAddField={onAddField}
          inputsNumber={inputsNumber}
          clearComposedMenu={clearComposedMenu}
        />
      )}
    </div>
  );
};

export default GradeItem;
