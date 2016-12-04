var repoFactory = function () {
    return {
        'task': require('./taskRepository'),
        'user': require('./userRepository'),
        'project': require('./projectRepository')
    }

}

module.exports = new repoFactory();