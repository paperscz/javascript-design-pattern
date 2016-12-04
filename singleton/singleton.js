var TaskRepo = (function(){
    var taskRepo;
    function createRepo() {
        return new Object("task");
    }

    return {
        getInstance: function () {
            if (!taskRepo) {
                taskRepo = createRepo();
            }
            return taskRepo;
        }
    }
})();


var instance1 = TaskRepo.getInstance();
var instance2 = TaskRepo.getInstance();

if (instance1 === instance2) {
    console.log("same instance!");
}
