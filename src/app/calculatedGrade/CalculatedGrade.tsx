import { Button } from "@/components/ui/button";
import { FC } from "react";

interface CalculatedGradeProps {
  grade: number;
  reset: () => void;
}

const CalculatedGrade: FC<CalculatedGradeProps> = ({ grade, reset }) => {
  return (
    <div className="flex flex-col items-start">
      <p className="text-lg font-semibold">Keep it up!</p>

      <p className="py-2 text-lg">Your current calculated grade is {grade}%</p>

      <div className="flex justify-end">
        <Button onClick={reset} variant="outline">
          Reset
        </Button>
      </div>
    </div>
  );
};

export default CalculatedGrade;
