const QuestFactory = {
    get(questId) {
        return require(`./quest${questId}`);
    }
};

module.exports = QuestFactory;