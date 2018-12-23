const path = require('path');
const log = require('loglevel');
const { cd, test, rm, mkdir } = require('shelljs');
const git = require('simple-git')();
const colors = require('colors');

const REPOSITORY = 'https://bitbucket.org/jeremy-lr/git-riddle.git';

class Quest {
    constructor(questId, directory) {
        this.questId = questId;
        this.questDirectory = path.join(directory, `git-quest-${this.questId}`);

        this.setupGitInterceptor();
    }

    setup(prepareQuestRepository) {
        console.log(`Setup GitQuest #${this.questId}.....`);

        let questRepositoryDirectory = path.join(this.questDirectory, `quest${this.questId}`);

        this.createQuestDirectory();
        this.fetchQuestContent().exec(() =>
            this.createQuestRepository().exec(() => {
                log.debug('Prepare quest repository');
                prepareQuestRepository(questRepositoryDirectory).exec(() => {
                    cd(questRepositoryDirectory);
                    this.displayInstructions();
                })
            })
        )
    }

    createQuestDirectory() {
        log.debug('Create quest directory');

        let questDirectoryParent = path.join(this.questDirectory, '..')
        cd(questDirectoryParent);

        if (test('-d', this.questDirectory)) {
            log.warn(`Remove existing directory: ${this.questDirectory}`)
            rm('-rf', this.questDirectory);
        }
        mkdir(this.questDirectory);
    }

    fetchQuestContent() {
        log.debug('Fetch quest content');
        return git.cwd(this.questDirectory)
            .exec(git.clone(REPOSITORY, 'remote.git', '--bare'))
            .exec(git.cwd(path.join(this.questDirectory, 'remote.git')))
            .exec(git.branch(['-m', `quest/src/${this.questId}`, 'master']));
    }

    createQuestRepository() {
        log.debug('Create quest repository');
        return git.cwd(this.questDirectory)
            .exec(git.clone('remote.git', `quest${this.questId}`));
    }

    displayInstructions() {
        if (log.getLevel() > log.levels.DEBUG) {
            console.clear();
        }

        console.log(`Setup GitQuest #${this.questId}.....OK\n`);

        let localRepoDir = path.resolve(`${this.questDirectory}/quest${this.questId}`);
        console.log(`Working directory: ${localRepoDir.blue}\n`);

        console.log('Quest notice:');
        console.log(`- Read your quest with "${'git-quest read'.yellow}"`);
        console.log(`- If you're stuck, get help with "${'git-quest help'.green}"`);
    }

    setupGitInterceptor() {
        git.outputHandler((command, stdout, stderr) => {
            if (command) {
                log.debug(command)
            }
        });
    }
}

module.exports = Quest;