// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners 
// Lesson 09 - Reading & Writing Files (fs)
//-----
const fs = require('fs');

// read-copy data & assign it to const readMe
const readMeNow = fs.readFileSync('readMeNow.txt', 'utf8');

// console.log const readMe
console.log(readMeNow);

// create writeMe.txt & write const readMe into it
fs.writeFileSync('writeMe1.txt', readMeNow); 


