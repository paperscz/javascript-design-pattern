var Task = require('./task');

var repoFactory = require('./repoFactory3');


var task1 = new Task(repoFactory.task.get(1));

var user = repoFactory.user.get(1);

var project = repoFactory.project.get(2);

task1.user = user;

task1.project = project;

task1.save();
