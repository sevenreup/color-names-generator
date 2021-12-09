const Handlebars = require("handlebars");

const jsTemplate = `
const colors = [
    {{#each colors}}
        { 
            name: "{{this.name}}",
            title: "{{this.title}}",
            value: "{{this.value}}",
        },
    {{/each}}
];

export default colors;
`;

function convertTo(type, data = []) {
    const template = Handlebars.compile(jsTemplate);
    return template({
        colors: data
    });
}

module.exports = convertTo;