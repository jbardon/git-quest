const program = require('commander');
const log = require('loglevel');

const setVersion = require('./command/version');
const ListCommand = require('./command/list');
const InitCommand = require('./command/init');

// revoir avec ENV
log.setLevel(log.levels.DEBUG);

setVersion();

/* implement:
avec guess quest id sinon ask
- read: open quest in browser
- help: open help in browser
*/
const commands = [ListCommand, InitCommand];
commands.map(command => new command());

program
    .parse(process.argv);

if (!program.args.length) {
    program.help();
}