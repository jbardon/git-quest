const program = require('commander');
const setVersion = require('./command/version');
const ListCommand = require('./command/list');
const InitCommand = require('./command/init');

setVersion();

const commands = [ListCommand, InitCommand];
commands.map(command => new command());

program.parse(process.argv);
console.log();

if (!program.args.length) {
    program.help();
}