import { Button } from "@/components/ui/button";
import { FC } from "react";
import { GRADES, Grades } from "../settingsForm/grades";
import Grade from "./Grade";

interface CalculatedGradeProps {
  grade: number;
  reset: () => void;
  desiredGrade: Grades;
}

const CalculatedGrade: FC<CalculatedGradeProps> = ({
  grade,
  reset,
  desiredGrade,
}) => {
  const roundedGrade = Math.round(grade);

  return (
    <div className="flex flex-col items-start">
      <p className="text-lg font-semibold">Keep it up!</p>

      <Grade roundedGrade={roundedGrade} />

      {+desiredGrade > grade ? (
        <p className="rounded-sm bg-red-200 px-2 py-1">
          You need {+desiredGrade - roundedGrade}% more to get to{" "}
          <span className="font-semibold">{GRADES[desiredGrade]}</span>
        </p>
      ) : (
        <p className="rounded-sm bg-green-200 px-2 py-1">
          You've got{" "}
          <span className="font-semibold">{GRADES[desiredGrade]}</span>
        </p>
      )}

      <div className="mt-2 flex justify-end">
        <Button onClick={reset} variant="outline">
          Reset
        </Button>
      </div>
    </div>
  );
};

export default CalculatedGrade;
