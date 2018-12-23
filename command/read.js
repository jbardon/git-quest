const program = require('commander');
const CommandHelper = require('./command-helper');

class ReadCommand {
    constructor() {
        program
            .command('read')
            .description('Read current quest instructions')
            .option('-q, --quest', 'Quest id (see "git-quest list)"', parseInt)
            .action(quest => this.exec(quest));
    }

    exec(questId) {
        questId = questId || CommandHelper.getCurrentQuestId();
        const instructionsLink = CommandHelper.getDocumentationLink(questId, false);

        console.log(`Opening instructions for Quest #${questId}...`);
        CommandHelper.openLink(instructionsLink);
    }
}

module.exports = ReadCommand;