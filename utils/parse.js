const cheerio = require('cheerio');

function parseHtml(html = "") {
    const $ = cheerio.load(html);
    const colors = [];
    $('div[id="colornamestable"]').find('div > div > span[class="colornamespan"] > a').toArray().forEach((el) => {
        var colorName = el.children[0].data;
        var colorHex = $('div[id="colornamestable"]').find(`a[href=${el.attribs.href}]`).parent().parent().find(`span[class="colorhexspan"]`).text();
        colors.push({
            name: colorName,
            value: colorHex,
            title: colorName.replace(/([A-Z])/g, ' $1')
                .replace(/^./, function (str) {
                    return str.toUpperCase();
                }).trim()
        });
    });

    return colors;
}

module.exports = parseHtml