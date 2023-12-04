import { FC } from "react";
import GradeItem from "./GradeItem";

interface GradesListProps {
  numberOfForms: number;
}

const GradesList: FC<GradesListProps> = ({ numberOfForms }) => {
  const array = new Array(+numberOfForms).fill(0);

  return array.map((_, i) => <GradeItem key={i} index={i} />);
};

export default GradesList;
