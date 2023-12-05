import { FC } from "react";
import { ListRestart, Undo2 } from "lucide-react";
import { GRADES } from "../../common/lib/grades";
import { useGradeContext } from "../context/useGradeContext";
import Grade from "./Grade";
import { Button } from "@/common/components/ui/button";
import { getScoredGrade } from "@/common/lib/getScoredGrade";

const CalculatedGrade: FC = () => {
  const {
    calculatedGrade: grade,
    desiredGrade,
    setIsGradeShown,
    reset,
  } = useGradeContext();

  const roundedGrade = Math.round(grade);
  const isGoalAchieved = +desiredGrade > grade;
  const missingPercents = +desiredGrade - roundedGrade;
  const scoredGrade = getScoredGrade(grade);

  function goBack() {
    setIsGradeShown(false);
  }

  return (
    <div className="mt-6 flex flex-col items-start border-t-2 pt-4">
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
          <p className="rounded-sm bg-green-200 px-2 py-1 mt-2">
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
