import { Button } from "@/components/ui/button";
import { FC } from "react";

interface CalculatedGradeProps {
  grade: number;
  reset: () => void;
  desiredGrade: number;
}

const CalculatedGrade: FC<CalculatedGradeProps> = ({
  grade,
  reset,
  desiredGrade,
}) => {
  return (
    <div className="flex flex-col items-start">
      <p className="text-lg font-semibold">Keep it up!</p>

      <p className="py-2 text-lg">
        Your current calculated grade is{" "}
        <span className="font-bold">{Math.round(grade)}%</span>
      </p>

      {+desiredGrade > grade ? (
        <p className="rounded-sm bg-red-200 px-2 py-1">
          You need {+desiredGrade - Math.round(grade)} % to get desired grade
        </p>
      ) : (
        <p className="rounded-sm bg-green-200 px-2 py-1">
          You got desired grade!
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
