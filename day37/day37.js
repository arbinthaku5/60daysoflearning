const students = [
  { id: 101, name: "Cristiano Ronaldo", submitted: true },
  { id: 102, name: "Kylian Mbappe", submitted: false },
  { id: 103, name: "Toni Kross", submitted: true },
  { id: 104, name: "Lionel Messi", submitted: false }
];

const topPerformers = [101, 103];

// map and includes
students.map(student => {
  const isTop = topPerformers.includes(student.id);
  console.log(
    `${student.name} - ${student.submitted ? "Submitted" : "Not Submitted"} ${isTop ? "(Top Performer)" : ""}`
  );
});

// 2. some()
const pending = students.some(s => !s.submitted);
console.log("Any pending submissions?", pending);

// 3. every()
const allSubmitted = students.every(s => s.submitted);
console.log("All students submitted?", allSubmitted);
