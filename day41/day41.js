const rawStudents = [
  ["Sita", "Rita"],
  ["Gita", ["Sita", "Hari"]],
  "Ram"
];

const flatList = rawStudents.flat(2);
console.log("Flat Student List:", flatList);

const uniqueStudents = [...new Set(flatList)];
console.log("Unique Students:", uniqueStudents);

const studentMarks = {
  Sita: 88,
  Rita: 76,
  Gita: 91,
  Hari: 65,
  Ram: 80
};

const entries = Object.entries(studentMarks);
console.log("Object Entries:", entries);

const reversedNames = uniqueStudents.reduceRight((acc, name) => acc + " " + name, "").trim();
console.log("Names Reversed:", reversedNames);

const updatedMarks = Object.fromEntries(
  entries.map(([name, mark]) => [name, mark + 5])
);
console.log("Updated Marks:", updatedMarks);

