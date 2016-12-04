var Task = require('./task');



var ObservableTask = function(data) {
    Task.call(this, data);
    this.observers = [];
}

ObservableTask.prototype.addObserver = function(observer){
    this.observers.push(observer);
}

ObservableTask.prototype.removeObserver = function(observer) {
    var index = -1;
    for (var i = 0; i < this.observers.length; i++){
        if (this.observers[i] == observer){
            index = i;
        }
    }

    this.observers.splice(index, 1);
}

ObservableTask.prototype.notify = function(task) {
    for (var i = 0; i < this.observers.length; i++){
        this.observers[i](task);
    }
}


ObservableTask.prototype.save = function(){
    this.notify(this);
    Task.prototype.save.call(this);
}

var NotificationService = function(){
    this.update = function(task) {
        console.log('notifying ' + task.user + ' for task '  + task.name);
    }
}

var LoggingService = function(){
    this.update = function(task) {
        console.log('logging ' + task.user + ' for task '  + task.name);
    }
}

var AuditingService = function(){
    this.update = function(task) {
        console.log('auditing ' + task.user + ' for task '  + task.name);
    }
}



var task = new ObservableTask({
    name: 'create a demo for observer',
    user: 'yulin'
})

task.addObserver(new NotificationService().update);
var loggingService = new LoggingService();
task.addObserver(loggingService.update);
task.addObserver(new AuditingService().update);

task.save();


task.removeObserver(loggingService.update);

task.save();


