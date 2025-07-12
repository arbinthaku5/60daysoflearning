// Access last and second-last log entries using at()
const logs = ["Init", "Load", "Auth", "Success", "Render"];
const lastLog = logs.at(-1);
const secondLastLog = logs.at(-2);
console.log("Last log entries:", secondLastLog, lastLog);

// Generate a 5-level rating bar using fill()
const rating = 4;
const full = Array(rating).fill("*").join("");
const empty = Array(5 - rating).fill("-").join("");
console.log("Rating:", full + empty); // ****-

//Generate a sequence from 0 to 4 using Array.from()
const sequence = Array.from({ length: 5 }, (_, i) => i);
console.log("Sequence:", sequence);

//Sum all numeric digits from a mixed string
const input = "A1b3x7y9";
const digitSum = [...input]
  .filter(char => !isNaN(char) && char !== " ")
  .map(Number)
  .reduce((sum, num) => sum + num, 0);

console.log("Sum of digits:", digitSum); // Output: 20
