const program = require('commander');
const { version } = require('../../package.json');

class VersionCommand {
    constructor() {
        program.version(version);
    }
}

module.exports = VersionCommand;