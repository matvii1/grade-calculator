import { GradeFormData } from "@/app/gradeForm/GradeForm";

export function getCurrentGrade(data: GradeFormData) {
  return data.grades.reduce((prev, curr) => {
    let currentGrade = 0;
    
    if (curr.grade && curr.percentage) {
      currentGrade = Math.round((curr.grade / 100) * curr.percentage);
    }

    return prev + currentGrade;
  }, 0);
}
