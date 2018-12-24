const program = require('commander');
const log = require('loglevel');

const ListCommand = require('./commands/list');
const VersionCommand = require('./commands/version');
const InitCommand = require('./commands/init');
const ReadCommand = require('./commands/read');
const HelpCommand = require('./commands/help');

// revoir avec ENV
log.setLevel(log.levels.DEBUG);

const commands = [
    ListCommand,
    VersionCommand,
    InitCommand,
    ReadCommand,
    HelpCommand
];
commands.map(command => new command());

program
    .parse(process.argv);

if (!program.args.length) {
    program.help();
}