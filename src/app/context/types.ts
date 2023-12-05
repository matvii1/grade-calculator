import { Grades } from "@/common/lib/grades";
import { Dispatch, SetStateAction } from "react";

export type GradeContextT = {
  isGradeShown: boolean;
  setIsGradeShown: Dispatch<SetStateAction<boolean>>;
  calculatedGrade: number;
  setCalculatedGrade: Dispatch<SetStateAction<number>>;
  numberOfForms: number;
  setNumberOfForms: Dispatch<SetStateAction<number>>;
  desiredGrade: Grades;
  setDesiredGrade: Dispatch<SetStateAction<Grades>>;
  triggerRemount: boolean;
  setTriggerRemount: Dispatch<SetStateAction<boolean>>;
  reset: () => void;
};
