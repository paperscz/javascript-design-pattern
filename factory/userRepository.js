var repo = function () {
    var db = {};

    var get = function (id) {
        console.log("Getting user " + id);
        return {
            name: 'new user ' + id + ' from db'
        }
    }

    var save = function (user) {
        console.log('Saving ' + user.name + ' to the db');
    }

    console.log('creating up user repo');

    return {
        get: get,
        save: save
    }

}

module.exports = repo();