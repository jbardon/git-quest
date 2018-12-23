const program = require('commander');
const quests = require('../data/quest.json');

class ListCommand {
    constructor() {
        program
            .command('list')
            .alias('l')
            .description('List available quests')
            .action(() => this.exec());
    }

    displayQuest(quest, id) {
        console.log(`- ${id + 1}: ${quest}`);
    }

    exec() {
        console.log('Available quests:');
        console.log('  (use "git-quest init <id>" to begin a quest)\n');
        Array.from(quests).forEach((q, i) => this.displayQuest(q, i));
    }
}

module.exports = ListCommand;