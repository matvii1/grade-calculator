import { FC } from "react";

interface GradeProps {
  roundedGrade: number;
}

const Grade: FC<GradeProps> = ({ roundedGrade }) => {
  return (
    <p className="py-2 text-lg">
      Your current calculated grade is{" "}
      <span className="font-bold">{roundedGrade}%</span>
    </p>
  );
};

export default Grade;
