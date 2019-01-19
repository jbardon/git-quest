const QuestFactory = {
    get(questId) {
        return require(`../quests/quest${questId}`);
    }
};

module.exports = QuestFactory;