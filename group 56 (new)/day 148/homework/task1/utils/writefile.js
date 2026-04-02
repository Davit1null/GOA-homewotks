const fs = require('fs/promises');
const path = require('path');

const writeFile = async (data) => {
    try {
        const filePath = path.join(__dirname, '../data/db.json');
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    } catch (err) {
        throw new Error("Failed to write file");
    }
};

module.exports = writeFile;