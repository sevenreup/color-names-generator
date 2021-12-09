const fs = require("fs").promises;
const path = require("path");

const writeToFile = async (name, content, type) => {
    const file = path.join(process.cwd(), `${name}.${type}`);
    await fs.writeFile(file, content);
}

module.exports = writeToFile