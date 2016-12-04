var repoFactory = function () {
    this.getRepo = function (repoType) {
        if (repoType === 'task') {
            return require('./taskRepository');
        }
        if (repoType === 'user') {
            return require('./userRepository');
        }
        if (repoType === 'project') {
            return require('./projectRepository');
        }
    }

}

module.exports = new repoFactory();