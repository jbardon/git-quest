const ask = require('readline-sync');
const open = require('opn');
const quests = require('../data/quest.json');

const CommandHelper = {
    getCurrentQuestId() {
        const currentDirectory = process.cwd();
        let matchingNumber = currentDirectory.match(/quest-(\d+)/)
        let questId = matchingNumber && matchingNumber[1];

        if (!questId) {
            console.log(`Can't guess your quest id from your current directory.\n   (use "git-quest list" if you don't know it)\n`);

            // User inputs from 1 (not from 0)
            const maxQuestId = Array.from(quests).length;
            return ask.question(
                `What's your quest id? `, {
                    limit: answer => answer.match(/\d?/) && answer <= maxQuestId,
                    limitMessage: `Please enter a valid quest id (max: ${maxQuestId})`
                });
        }
    },
    getDocumentationLink(questId, isHelp) {
        const pageName = isHelp ? 'help' : 'main';
        const documentationLink = 'https://jbardon.github.io/git-quest/simple-workflow/quest';
        return `${documentationLink}/quest${questId}/quest${questId}.${pageName}.html`;
    },
    openLink(link) {
        open(link);
        process.exit(); // Opened browser prevent script exit
    }
};

module.exports = CommandHelper;