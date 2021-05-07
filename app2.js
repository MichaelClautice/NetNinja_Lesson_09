// Michael Clautice, Richmond, VA
// The Net Ninja - Node JS Tutorial for Beginners 
// Lesson 09 - Reading & Writing Files (fs)
//-----
const fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err, data){
    console.log(data);
});

console.log('Async, Non-Blocking Code Test Here');