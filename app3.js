// Michael Clautice, Richmond, VA
// The Net Ninja - Node JS Tutorial for Beginners 
// Lesson 09 - Reading & Writing Files (fs)
//-----
const fs = require('fs');

// statement block below does not work:-----

/* fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('writeMe.txt', data);
}); */

// statement block below DOES work:-----

fs.readFile('readMe.txt', 'utf8', function(err, data){
    
    fs.writeFile('writeMe2.txt', data, (err)=>{});
});

// statement block below DOES work:-----

/* fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('writeMe2.txt', data, function(err){
        if (err) throw err;
    });
});
 */