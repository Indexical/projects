
module.exports = Promise.all([
    require('./config'),
    require('./router')
]).then(function(result) {
    var config = result[0].server;
    var router = result[1];
    return new Promise(function(resolve, reject) {
        var app = require('express')();
        var server = app.listen(config.port, config.host, function() {
            console.log('projects server listening at %s:%s', config.host, config.port);
            resolve(server);
        });
    });
}, function(error) {
    console.log(error);
});
