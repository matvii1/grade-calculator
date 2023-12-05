import { GradeData } from "@/app/gradeForm/schema";

export function getCurrentGrade(data: GradeData[]) {
  return data.reduce((prev, curr) => {
    let currentGrade = 0;

    if (curr.grade && curr.percentage) {
      currentGrade = (curr.grade / 100) * curr.percentage;
    }

    return prev + currentGrade;
  }, 0);
}
