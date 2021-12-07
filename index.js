#! /usr/bin/env node

const {
    program
} = require('commander')
const download = require('./commands/download')

program
    .command('download')
    .description('Download to json file')
    .action(download)

program.parse()