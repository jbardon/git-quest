const path = require('path');
const program = require('commander');
const quest1 = require('./quest/quest1');
//const quest2 = require('./quest/quest2');

class InitCommand {
    constructor() {
        program
            .command('init [dir]')
            .alias('i')
            // in the given directory.\nThe quest id is required (use "git-quest list" to get the list).
            .description('Begin a new quest (Default dir: .)')
            .usage('[dir] -Q <quest-id>')
            .option('-Q, --quest <id>', 'Quest id', parseInt)
            .action((dir, cmd) => this.exec(cmd.quest, dir));
    }

    exec(questId, directory) {
        if (!questId) {
            console.log(program.help()); // à revoir pour aide spécifique à la commande
        } else if (!directory) {
            directory = path.join(__dirname, '..');
        }
        switch (questId) {
            case 1: quest1(directory); break;
        }
    }
}

module.exports = InitCommand;