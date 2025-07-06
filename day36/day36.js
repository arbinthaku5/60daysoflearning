const users = [
  { id: 1, name: "arya stark", active: true },
  { id: 2, name: "jon snow", active: false },
  { id: 3, name: "jorah mormont", active: true },
  { id: 4, name: "tyrion lannister", active: true },
];

// 1. filter() used for active users
const activeUsers = users.filter(user => user.active);
console.log("Active users:", activeUsers);

// 2. forEach() name print garna lai
activeUsers.forEach(user => {
  console.log("User:", user.name);
});

// 3. ind() specific user id recognise garney
const userWithId3 = users.find(user => user.id === 3);
console.log("User with ID 3:", userWithId3);
