const chalk = require('chalk')

async function download() {
    console.log(chalk.default.blue("Download Started"));
    try {
        const data = await fetch("https://www.w3schools.com/colors/colors_names.asp");
        console.log(chalk.default.green(data));
    } catch (error) {
        console.log(chalk.default.red("Failed"));
    }

}

module.exports = download