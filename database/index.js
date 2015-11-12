
module.exports = require('../config').then(function(config) {
    var r = require('rethinkdbdash')(config.database);
    return r.tableList().then(function(source) {
        var target = [
            'projects'
        ];
        function ensure(name) {
            if (source.indexOf(name) == -1) {
                return r.createTable(name);
            }
        }
        return Promise.all(target.map(ensure)).then(function() {
            return r;
        });
    });
});
