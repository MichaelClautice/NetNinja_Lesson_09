// Michael Clautice, Richmond, VA
// The Net Ninja - Node JS Tutorial for Beginners 
// Lesson 09 - Reading & Writing Files (fs)
//-----
const fs = require('fs');

// read-copy data & assign it to const readMe
const readMe = fs.readFileSync('readme.txt', 'utf8');

// console.log const readMe
console.log(readMe);

// create writeMe.txt & write const readMe into it
fs.writeFileSync('writeMe.txt', readMe); 


