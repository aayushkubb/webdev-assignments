// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

function calculateTime(n) {
    let sum = 0;
    let start = new Date();
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    let end = new Date();
    return (end-start)/1000;
}

fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
} )
console.log("This is a message after the read call");
console.log(calculateTime(10000000000));