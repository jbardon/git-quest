const path = require('path');
const { cd, test, rm, mkdir } = require('shelljs');
const git = require('simple-git/promise')();
const colors = require('colors');

const QUEST_ID = 1;
const REPOSITORY = 'https://bitbucket.org/jeremy-lr/git-riddle.git';

function Quest1(directory) {

    const questDir = path.join(directory, `git-quest-${QUEST_ID}`);

    function initDir(questDir) {
        cd(path.join(questDir, '..'));
        if (test('-d', questDir)) {
            rm('-rf', questDir);
        }
        mkdir(questDir);
    }

    function buildRemoteRepository(questDir) {
        git.cwd(questDir);
        git.clone(REPOSITORY, 'remote.git', '--bare');
        git.cwd(path.join(questDir, 'remote.git'));
        git.branch(['-m', `quest/src/${QUEST_ID}`, 'master']);
    }

    function buildLocalRepository(questDir) {
        git.cwd(questDir);
        git.clone('remote.git', `quest${QUEST_ID}`);
    }

    function initQuest(questDir) {
        let localRepoDirectory = path.join(questDir, `quest${QUEST_ID}`);
        console.log(localRepoDirectory)
        git.cwd(localRepoDirectory);
        git.checkout('master');
        git.raw(['cherry-pick', `quest/src/${QUEST_ID}--end`, '--no-commit']);
        git.reset('mixed');

        cd(localRepoDirectory);
    }

    function displayInstructions(questDir) {
        /*
        console.clear();
        console.log(`Setup GitQuest #${QUEST_ID}.....OK\n`);

        let localRepoDir = path.resolve(`${questDir}/quest${QUEST_ID}`);
        console.log(`Working directory: ${localRepoDir.blue}\n`);

        console.log('Quest notice:');

        const questUrl = `https://jbardon.github.io/git-quest/simple-workflow/quest/quest${QUEST_ID}/quest${QUEST_ID}`;
        console.log(`- Read your quest on ${`${questUrl}.main.html`.yellow}`);
        console.log(`- If you're stuck, get help on ${`${questUrl}.help.html`.green}`);
        */
    }

    console.log(`Setup GitQuest #${QUEST_ID}.....`, '\r')

    initDir(questDir);
    buildRemoteRepository(questDir);
    buildLocalRepository(questDir);
    initQuest(questDir);
    displayInstructions(questDir);
}

module.exports = Quest1;