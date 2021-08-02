const path = require('path');
const program = require('commander');
const QuestFactory = require('../helpers/quest-factory');
const { exit } = require('process');

class InitCommand {
    constructor() {
        const argumentsDescription = {
            dir: 'Directory to setup the quest (Default: .)',
            quest: 'Quest id (see "git-quest list")'
        };
        program
            .command('init')
            .arguments('<quest> [dir]')
            .description('Begin a new quest', argumentsDescription)
            .action((quest, directory) => this.exec(quest, directory));
    }

    exec(questId, directory) {
        if (!directory) {
            directory = process.cwd();
        }
        // Faire un interceptor git global
        const quest = QuestFactory.get(questId);
        quest.init(directory);
    }
}

module.exports = InitCommand;