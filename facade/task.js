var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}


var TaskService = function () {
    return {
        complete: function (task) {
            task.completed = true;
            console.log('completing task: ' + task.name);
        },
        setCompleteDate: function (task) {
            task.comletedDate = new Date();
            console.log(task.name + ' completed on ' + task.comletedDate);
        },
        notifyCompletion: function(task, user){
            console.log('Notifying ' + user + ' of the completion of ' + task.name);
        },
        save: function (task) {
            console.log('saving task: ' + task.name);
        }
    }
}


var TaskServiceManager = function () {
    var completeAndNotify = function (task){
        var taskService = new TaskService();
        taskService.complete(task);
        if (task.completed == true) {
            taskService.setCompleteDate(task);
            taskService.notifyCompletion(task, task.user);
            taskService.save(task);
        }
    }

    return {
        completeAndNotify: completeAndNotify
    }

}


var myTask = new Task({
    name: 'MyTask',
    priority: 1,
    project: 'Courses',
    user: 'Jon',
    completed: false
});
//console.log(myTask);
new TaskServiceManager().completeAndNotify(myTask);

console.log(myTask);
