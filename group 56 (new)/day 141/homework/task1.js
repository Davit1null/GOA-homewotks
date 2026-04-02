const fs = require('fs/promises');

async function readFileX() {
    try {
        const data = await fs.readFile('text.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

readFileX();