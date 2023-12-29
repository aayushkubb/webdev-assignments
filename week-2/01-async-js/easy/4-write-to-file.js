// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


const fs = require('fs');

// fs.writeFile('test.txt', 'Hello World!', function (err) {
//     if (err) return console.log(err);
//     console.log('Hello World > test.txt');
// });

fs.appendFile('test.txt', '\nHello World2.!\n', function (err) {
    if (err) return console.log(err);
    console.log('Hello World > test.txt');
}  );