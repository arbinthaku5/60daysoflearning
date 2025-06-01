// Modern JavaScript (ES6+) Practice

// 1. let and const
let age = 23;
const username = "cristiano messi";

console.log(`User: ${username}, Age: ${age}`);

// 2. Arrow function
const greet = (name) => `Hello, ${name}! Welcome to Day 1 of MERN`;
console.log(greet(username));

// 3. Template literals
const lang = "JavaScript";
console.log(`You're learning ${lang} as part of the MERN stack!`);

// 4. Object destructuring
const person = {
  name: "messi",
  profession: "Engineer",
  location: "Bhaktapur",
};

const { name, profession, location } = person;
console.log(`Name: ${name}, Profession: ${profession}, Location: ${location}`);

// 5. Spread operator
const frontend = ["HTML", "CSS", "JS"];
const mernStack = [...frontend, "React", "Node", "MongoDB"];
console.log("MERN Stack:", mernStack);

// 6. Rest operator
const sum = (...nums) => {
  return nums.reduce((total, num) => total + num, 0);
};
console.log("Sum of numbers:", sum(10, 20, 30, 40));

// 7. Bonus: Array destructuring
const [first, second, ...rest] = mernStack;
console.log("First Tech:", first);
console.log("Second Tech:", second);
console.log("Rest:", rest);
