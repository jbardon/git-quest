#!/bin/bash
BASE_PATH=$(pwd)
GITHUB_PAGES_REPO=/Volumes/Data/Projets/git-quest/remote-doc

cd ${GITHUB_PAGES_REPO}
rm -rf ./*

cd ${BASE_PATH}
gitbook build
cp -R ./_book/* ${GITHUB_PAGES_REPO}

cd ${GITHUB_PAGES_REPO}
git add .
git ci --amend --no-edit
git push --force

# asciidoctor -D ./_asciidoc ./**/*.adoc