
module.exports = require('./index').then(function(database) {
    return {
        get: function(id) {
            return database.table('projects').get(id).run();
        },
        insert: function(record) {
            return database.table('projects').insert(record).run();
        }
    };
});
