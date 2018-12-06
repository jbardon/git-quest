#!/bin/bash

STEP=$1
STEP_DIR=~/git-quest/quest$STEP

function displayQuestNotice {
  GREEN='\033[1;32m'
  YELLOW='\033[1;33m'
  BLUE='\033[1;34m'
  NC='\033[0m'

  echo -e "Setup GitQuest #${STEP}.....OK\n"
  echo -e "Working directory: ${BLUE}${STEP_DIR}/git-quest${STEP}${NC}\n"

  echo "Quest notice: "
  echo -e "- Read your quest in ${YELLOW}README.md${NC}"
  echo -e "- If you're stuck, get help in ${GREEN}HELP.md${NC}"
}

displayQuestNotice
