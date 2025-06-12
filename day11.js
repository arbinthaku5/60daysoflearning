//file system 
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

//append to a file ir add haha
fs.appendFile('output.txt', '\nMore content here...', (err) => {
  if (err) throw err;
  console.log('Appended content');
});

//delete a file
fs.unlink('output.txt', (err) => {
  if (err) throw err;
  console.log('File deleted');
});
//file system ends here



const EventEmitter = require('events'); // 1. Import
const emitter = new EventEmitter();     // 2. Create an instance

// 3. Subscribe to an event
emitter.on('greet', () => {
  console.log('Hello! The greet event was fired.');
});

// 4. Emit the event
emitter.emit('greet');
