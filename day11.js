const fs = require('fs');

fs.writeFile('example.txt', 'This is some sample text.', (err) => {
  if (err) throw err;

  fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});