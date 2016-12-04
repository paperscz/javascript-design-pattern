var Task = require('./task');

var repoFactory = require('./repoFactory');


var task1 = new Task(repoFactory.getRepo('task').get(1));

var user = repoFactory.getRepo('user').get(1);

var project = repoFactory.getRepo('project').get(2);

task1.user = user;

task1.project = project;

task1.save();
