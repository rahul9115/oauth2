const fs = require('fs');
const content = 'Logging to a file';
const crypto = require("crypto");
const start = Date.now()
function loghashtime() {
    const read = fs.readFileSync('test.txt', { encoding: 'utf8', flag: 'r' });
    console.log(read.toString());
    console.log("Hash ", Date.now() - start);
    console.log("Its done");
}
loghashtime();
function loghashtime1() {
    fs.readFile('test.txt', 'utf8', (err, data) => {
        console.log(data);

    });
    console.log("Hash ", Date.now() - start);
    console.log("Its done");
}
loghashtime1();