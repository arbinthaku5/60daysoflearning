// Initial student data
const student = {
  name: "Cristiano",
  age: 21,
  tasks: ["Submit assignment", "Read chapter 5", "Join group discussion"]
};

// Object Destructuring
const { name, tasks } = student;
console.log("Student Name:", name);

// Array Destructuring
const [firstTask, ...remainingTasks] = tasks;
console.log("First Task:", firstTask);
console.log("Remaining Tasks:", remainingTasks);

// Spread Operator – Add new task (immutably)
const updatedStudent = {
  ...student,
  tasks: [...student.tasks, "Practice coding"]
};
console.log("Updated Student:", updatedStudent);

// 4. Rest Operator – Separate name, and collect other info
const { name: studentName, ...restInfo } = updatedStudent;
console.log("Name Only:", studentName);
console.log("Other Info:", restInfo);
