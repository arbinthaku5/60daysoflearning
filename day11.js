const fs = require('fs');

//write to file
fs.writeFile('example.txt', 'This is some sample text.', (err) => {
  if (err) throw err;
  console.log('File written successfully');

//read a file
  fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});

fs.appendFile('output.txt', '\nMore content here...', (err) => {
  if (err) throw err;
  console.log('Appended content');
});
