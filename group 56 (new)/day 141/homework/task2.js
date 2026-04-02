const fs = require('fs/promises');

async function readJSON() {
    try {
        const data = await fs.readFile('data.json', 'utf8');
        const obj = JSON.parse(data);

        console.log(obj.name);
    } catch (err) {
        console.error(err);
    }
}

readJSON();