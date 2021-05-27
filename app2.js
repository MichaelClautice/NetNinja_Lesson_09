// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners 
// Lesson 09 - Reading & Writing Files (fs)
//-----
const fs = require('fs');

fs.readFile('readMeNow.txt', 'utf8', function(err, data){
    console.log(data);
});

console.log('\nAsync, Non-Blocking Code Test Here\n');