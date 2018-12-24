const program = require('commander');
const CommandHelper = require('../helpers/command-helper');

class HelpCommand {
    constructor() {
        program
            .command('help')
            .description('Show current quest help')
            .option('-q, --quest', 'Quest id (see "git-quest list)"', parseInt)
            .action(quest => this.exec(parseInt(quest)));
    }

    exec(questId) {
        questId = questId || CommandHelper.getCurrentQuestId();
        const helpLink = CommandHelper.getDocumentationLink(questId, true);

        console.log(`Opening help for Quest #${questId}...`);
        CommandHelper.openLink(helpLink);
    }
}

module.exports = HelpCommand;