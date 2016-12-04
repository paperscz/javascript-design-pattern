var repo = {
    select: function (id) {
        console.log('Getting task ' + id);
        return {
            name: 'new taks no. ' + id
        }
    },

    save: function (task) {
        console.log('saving ' + task.name + ' to the db');
    }
}


repo.execute = function(name) {
    var arg = Array.prototype.slice.call(arguments, 1);

    if (repo[name]){
        return repo[name].apply(repo, arg);
    }
    return false;
}


repo.execute('select', 2);
repo.execute('save', {name: 'yulin'});