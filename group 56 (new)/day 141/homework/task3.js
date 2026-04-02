const fs = require('fs');
const readline = require('readline');

const stream = fs.createReadStream('large.txt');

const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    console.log(line);
});