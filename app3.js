// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners 
// Lesson 09 - Reading & Writing Files (fs)
//-----
const fs = require('fs');

// old statement block below does not work
// instructor's code is old & deprecated:-----

/* fs.readFile('readMeNow.txt', 'utf8', function(err, data){
    fs.writeFile('writeMeNow.txt', data);
}); */

// new statement block w/out ES6 below DOES work:-----

/* fs.readFile('readMeNow.txt', 'utf8', function(err, data){
    console.log(data);
    fs.writeFile('writeMeNow.txt', data, function(err){
        if (err) throw err;
    });
}); */

// new statement block with ES6 below also DOES work:-----

fs.readFile('readMeNow.txt', 'utf8', function(error, data){
    console.log(data);    
    fs.writeFile('writeMeNow.txt', data, (error)=>{});
});



