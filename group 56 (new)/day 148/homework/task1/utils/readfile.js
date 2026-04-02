const fs = require('fs/promises');
const path = require('path');

const readFile = async () => {
    try {
        const filePath = path.join(__dirname, '../data/db.json');
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        throw new Error("Failed to read file");
    }
};

module.exports = readFile;