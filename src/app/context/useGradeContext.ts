import { useContext } from "react";
import { GradeContext } from "./GradeProvider";

export const useGradeContext = () => useContext(GradeContext);
