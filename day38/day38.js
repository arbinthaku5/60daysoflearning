const students = [
  { id: 1, name: "NJ10", marks: 88 },
  { id: 2, name: "TK8", marks: 76 },
  { id: 3, name: "LM10", marks: 91 },
  { id: 4, name: "R9", marks: 85 },
  { id: 5, name: "CR7", marks: 92 }
];

//Sort students by marks (descending)
const sorted = [...students].sort((a, b) => b.marks - a.marks);
console.log("Sorted by marks (top to bottom):");
console.log(sorted);

//Get top 3 students
const top3 = sorted.slice(0, 3);
console.log("Top 3 students:");
console.log(top3);

//Find index of student with id 2
const indexToRemove = students.findIndex(s => s.id === 2);
console.log("Index of student with ID 2:", indexToRemove);

//Remove that student from original array (modify in-place)
if (indexToRemove !== -1) {
  students.splice(indexToRemove, 1);
}
console.log("After removing student with ID 2:");
console.log(students);
