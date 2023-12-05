import { FC, ReactNode, createContext, useState } from "react";
import { GradeContextT } from "./types";
import { Grades } from "@/common/lib/grades";

type GradeProviderProps = {
  children: ReactNode;
};

export const GradeContext = createContext<GradeContextT>({} as GradeContextT);

const GradeProvider: FC<GradeProviderProps> = ({ children }) => {
  const [isGradeShown, setIsGradeShown] = useState(false);
  const [calculatedGrade, setCalculatedGrade] = useState(0);
  const [numberOfForms, setNumberOfForms] = useState(1);
  const [desiredGrade, setDesiredGrade] = useState<Grades>("70");
  const [triggerRemount, setTriggerRemount] = useState(false);

  function reset() {
    setCalculatedGrade(0);
    setDesiredGrade("70");
    setNumberOfForms(1);
    setTriggerRemount((prev) => !prev);
    setIsGradeShown(false);
  }

  const value = {
    isGradeShown,
    setIsGradeShown,
    calculatedGrade,
    setCalculatedGrade,
    numberOfForms,
    setNumberOfForms,
    desiredGrade,
		setDesiredGrade,
    triggerRemount,
    setTriggerRemount,
    reset,
  };

  return (
    <GradeContext.Provider value={value}>{children}</GradeContext.Provider>
  );
};

export default GradeProvider;
