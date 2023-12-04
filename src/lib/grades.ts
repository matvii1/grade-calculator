export const GRADES = {
  "62": "D",
  "65": "D+",
  "70": "C-",
  "73": "C",
  "77": "C+",
  "80": "B-",
  "83": "B",
  "87": "B+",
  "90": "A-",
  "95": "A",
} as const;

export type Grades = keyof typeof GRADES;

export const gradesArr = Object.keys(GRADES) as Grades[];
