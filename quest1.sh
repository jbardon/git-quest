#!/bin/bash

STEP=1
STEP_DIR=~/git-quest/quest$STEP/git-quest$STEP
BASE_PATH=$(pwd)

function initQuest {
	cd ${STEP_DIR}
	git checkout master --quiet
	git cherry-pick quest/src/$STEP--end --no-commit --quiet
	git reset --quiet
}

${BASE_PATH}/base/init.sh $STEP
initQuest
${BASE_PATH}/base/finish.sh $STEP