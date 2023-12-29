// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');

fs.readFile('../easy/test.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('An error occurred:', err);
        return;
    }

    let contents = data.replace(/\s+/g, ' ');
    console.log(contents);

    fs.writeFile('../easy/test.txt', contents, (err) => {
        if (err) {
            console.error('An error occurred:', err);
        } else {
            console.log('File cleaned successfully');
        }
    });
});