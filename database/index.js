
module.exports = require('../config').then(function(config) {
    console.log('resolved config');
    return require('rethinkdbdash')(config.database);
});
