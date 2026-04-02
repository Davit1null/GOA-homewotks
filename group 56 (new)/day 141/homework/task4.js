const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
    if (data.trim() === 'exit') {
        writeStream.end();
        process.exit();
    }

    writeStream.write(data);
});

writeStream.on('finish', () => {
    console.log("stream closed. data saved.");
});