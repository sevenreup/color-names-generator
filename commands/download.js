const chalk = require('chalk')
const got = require('got');
const parseHtml = require('../utils/parse');
const convertTo = require("../utils/convertTo");
const writeToFile = require('../utils/fileWriter');

async function download() {
    console.log(chalk.blue("Download Started"));
    try {
        const res = await got("https://www.w3schools.com/colors/colors_names.asp");
        var data = parseHtml(res.body);
        writeToFile("colors", convertTo("", data), "js");
    } catch (error) {
        console.log(chalk.red(error));
    }

}

module.exports = download