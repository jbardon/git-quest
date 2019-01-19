const git = require('simple-git')();
const Quest = require('./abstract-quest');

const QUEST_ID = 3;

const Quest3 = {
    init(directory) {
        const quest = new Quest(QUEST_ID, directory);
        quest.setup(initQuest);

        function initQuest(questDirectory) {
            return git.cwd(questDirectory)
                .exec(git.checkout('master'));
        }
    }
}

module.exports = Quest3;