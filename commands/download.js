const chalk = require('chalk')
const got = require('got');
const parseHtml = require('../utils/parse');
const convertTo = require("../utils/convertTo");

async function download() {
    var http = require("http");
    console.log(chalk.blue("Download Started"));
    try {
        const res = await got("https://www.w3schools.com/colors/colors_names.asp");
        var data = parseHtml(res.body);
        //console.log(data);
        convertTo("",data);
    } catch (error) {
        console.log(chalk.red(error));
    }

}

module.exports = download