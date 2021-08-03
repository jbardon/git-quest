# Developer guide

Requirements: node

## Setup

```sh
npm install
./node_modules/.bin/gitbook install
```

Take a look at scripts section in `package.json` for development commands.

## Tech
- CLI: commander, exported as a binary
- Doc: gitbook, asciidoc, hosted on github

## Quests
Hosted as git repository named [git-quest-src](https://github.com/jbardon/git-quest-src).  

Each quest starts with a branch and may ends with a tag when necessary. For instance, the first quest works with [quest/1](https://github.com/jbardon/git-quest-src/tree/quest/1) branch and [quest/1--end](https://github.com/jbardon/git-quest-src/tree/quest/1--end) tag.

A simple project to start with is available on [dev](https://github.com/jbardon/git-quest-src/tree/dev) branch.