const git = require('simple-git')();
const Quest = require('./abstract-quest');

const QUEST_ID = 1;

function Quest1(directory) {

    const quest = new Quest(QUEST_ID, directory);
    quest.setup(initQuest);

    function initQuest(questDirectory) {
        return git.cwd(questDirectory)
            .exec(git.checkout('master'))
            .exec(git.raw(['cherry-pick', `quest/src/${QUEST_ID}--end`, '--no-commit']))
            .exec(git.reset('mixed'));
    }
}

module.exports = Quest1;