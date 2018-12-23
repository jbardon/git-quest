const program = require('commander');
const log = require('loglevel');

const setVersion = require('./command/version');

const ListCommand = require('./command/list');
const InitCommand = require('./command/init');
const ReadCommand = require('./command/read');
const HelpCommand = require('./command/help');

// revoir avec ENV
log.setLevel(log.levels.DEBUG);

setVersion();

const commands = [ListCommand, InitCommand, ReadCommand, HelpCommand];
commands.map(command => new command());

program
    .parse(process.argv);

if (!program.args.length) {
    program.help();
}