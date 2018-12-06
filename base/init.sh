#!/bin/bash

STEP=$1
STEP_DIR=~/git-quest/quest$STEP
REMOTE_DIR=~/git-quest/quest$STEP/remote.git

function initDirectories {
  cd ~
  if [ ! -d "git-quest" ]; then
     mkdir ~/git-quest
  fi

  cd ~/git-quest
  if [ -d "quest$STEP" ]; then
     rm -rf quest$STEP
  fi

  mkdir quest$STEP
}

function buildRemoteRepository {
  cd ${STEP_DIR}
  git clone --bare https://bitbucket.org/jeremy-lr/git-riddle.git remote.git --quiet

  cd ${REMOTE_DIR}
  git branch -m quest/src/$STEP master --quiet
}

function buildLocalRepository {
  cd ${STEP_DIR}
  git clone ${REMOTE_DIR} git-quest$STEP --quiet
}

echo -ne "Setup GitQuest #${STEP}....." "\r"

initDirectories
buildRemoteRepository
buildLocalRepository