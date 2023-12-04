import { Button } from "@/components/ui/button";
import { getScoredGrade } from "@/lib/getScoredGrade";
import { ListRestart, Undo2 } from "lucide-react";
import { FC } from "react";
import { GRADES, Grades } from "../../lib/grades";
import Grade from "./Grade";

interface CalculatedGradeProps {
  grade: number;
  reset: () => void;
  desiredGrade: Grades;
  setIsGradeShown: (value: boolean) => void;
}

const CalculatedGrade: FC<CalculatedGradeProps> = ({
  grade,
  reset,
  desiredGrade,
  setIsGradeShown,
}) => {
  const roundedGrade = Math.round(grade);
  const isGoalAchieved = +desiredGrade > grade;
  const missingPercents = +desiredGrade - roundedGrade;
  const scoredGrade = getScoredGrade(grade);

  function goBack() {
    setIsGradeShown(false);
  }

  return (
    <div className="mt-4 flex flex-col items-start border-t-2">
      <p className="text-lg font-semibold">Keep it up!</p>

      <Grade roundedGrade={roundedGrade} />

      {isGoalAchieved ? (
        <p className="rounded-sm bg-red-200 px-2 py-1">
          You need {missingPercents}% more to get to{" "}
          <span className="font-semibold">{GRADES[desiredGrade]}</span>
        </p>
      ) : GRADES[desiredGrade] === GRADES[scoredGrade] ? (
        <p className="rounded-sm bg-green-200 px-2 py-1">
          You've got grade{" "}
          <span className="font-semibold">{GRADES[scoredGrade]}</span>
        </p>
      ) : (
        <div>
          <p>
            Desired grade:{" "}
            <span className="font-semibold">{GRADES[desiredGrade]}</span>
          </p>
          <p className="rounded-sm bg-green-200 px-2 py-1">
            You've got grade{" "}
            <span className="font-semibold">{GRADES[scoredGrade]}</span>
          </p>
        </div>
      )}

      <div className="mt-6 flex w-[100%] justify-between">
        <Button
          onClick={goBack}
          variant="default"
          className="flex items-center gap-2"
        >
          <Undo2 size={20} />
          Go back
        </Button>

        <Button
          onClick={reset}
          variant="outline"
          className="flex items-center gap-2"
        >
          <ListRestart size={20} />
          Reset
        </Button>
      </div>
    </div>
  );
};

export default CalculatedGrade;
