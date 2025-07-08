const students = [
  { id: 1, name: "Sita", marks: 88 },
  { id: 2, name: "Gopal", marks: 76 },
  { id: 3, name: "Rina", marks: 91 },
  { id: 4, name: "Kiran", marks: 85 },
  { id: 5, name: "Bina", marks: 92 }
];

// 1. sort(): Sort students by marks (descending)
const sorted = [...students].sort((a, b) => b.marks - a.marks);
console.log("Sorted by marks (top to bottom):");
console.log(sorted);

// 2. slice(): Get top 3 students
const top3 = sorted.slice(0, 3);
console.log("Top 3 students:");
console.log(top3);

// 3. findIndex(): Find index of student with id 2
const indexToRemove = students.findIndex(s => s.id === 2);
console.log("Index of student with ID 2:", indexToRemove);

// 4. splice(): Remove that student from original array (modify in-place)
if (indexToRemove !== -1) {
  students.splice(indexToRemove, 1);
}
console.log("After removing student with ID 2:");
console.log(students);
