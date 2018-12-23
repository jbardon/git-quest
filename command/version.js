const program = require('commander');
const { version } = require('../package.json');

function setVersion() {
    program.version(version);
}

module.exports = setVersion;