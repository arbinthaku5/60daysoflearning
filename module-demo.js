// fs demo
const fs = require('fs');
fs.writeFileSync('hello.txt','hello from node.js!');
const data = fs.readFileSync('hello.txt','utf8');
console.log('File content:', data);


// path-demo.js
const path = require('path');
// Manually defining the full path
const filePath = 'C:\\60daysoflearning\\module-demo.js';
console.log('Full path:', filePath);
console.log('Folder:', path.dirname(filePath));
console.log('File name:', path.basename(filePath));

//os module demo
const os = require('os');

console.log('OS type:', os.type());
console.log('Free memory:', os.freemem());
console.log('User info:', os.userInfo());
