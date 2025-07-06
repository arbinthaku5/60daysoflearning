// Simulated fake API using Promise
const fetchNumbers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5, 6]);
    }, 1000);
  });
};

// result dispaly ko lagi callback function
const displayResult = (result) => {
  console.log("Final sum of doubled even numbers:", result);
};

// data processing using async/await
const processData = async (callback) => {
  try {
    const numbers = await fetchNumbers(); // Async/Await with Promise
    console.log("Fetched numbers:", numbers);

    const doubledEvens = numbers
      .filter(n => n % 2 === 0)          // jod number filter garney
      .map(n => n * 2);                 

    console.log("Doubled evens:", doubledEvens);

    const total = doubledEvens.reduce((acc, curr) => acc + curr, 0); // Reduce to sum
    callback(total); // Pass result to callback
  } catch (err) {
    console.error("Error:", err);
  }
};

// runing async function to call back yesma
processData(displayResult);
