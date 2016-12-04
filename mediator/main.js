var Task = require('./task');


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


var mediator = (function(){
    var channels = {};

    var subscribe = function (channel, context, func) {
        if (!channels[channel]){
            channels[channel] = [];
        }
        channels[channel].push({
            context: context,
            func: func
        })
    }

    var publish = function(channel) {
        if (!channels[channel]){
            return false;
        }

        var args = Array.prototype.slice.call(arguments, 1);

        for (var i = 0; i < channels[channel].length; i++){
            var sub = channels[channel][i];
            sub.func.apply(sub.context, args);
        }
    }

    return {
        subscribe: subscribe,
        publish: publish
    }

})();


var notificationService = new NotificationService();
var loggingService = new LoggingService();
var auditingService = new AuditingService();


mediator.subscribe('complete', notificationService, notificationService.update);
mediator.subscribe('complete', loggingService, loggingService.update);
mediator.subscribe('complete', auditingService, auditingService.update);


var task = new Task({
    name: 'create a demo for observer',
    user: 'yulin'
})


task.complete = function () {
    mediator.publish('complete', this);
    Task.prototype.complete.call(this);
}

task.complete();


