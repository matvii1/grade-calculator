import { Grades, gradesArr } from "./grades";

export function getScoredGrade(grade: number): Grades {
  let highestScore;

  const sortedDescGrades = gradesArr.sort((a, b) => {
    return +a - +b;
  });

  sortedDescGrades.forEach((sortedGrade) => {
    if (grade >= +sortedGrade) {
      highestScore = +sortedGrade;
    }
  });

  return highestScore || "62";
}
