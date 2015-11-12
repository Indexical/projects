
module.exports = Promise.all([
    require('./config'),
    require('./app')
]).then(function(result) {
    var config = result[0].server;
    var application = result[1];
    return new Promise(function(resolve) {
        var server = application.listen(config.port, config.host, function() {
            console.log('projects server listening at %s:%s', config.host, config.port);
            resolve(server);
        });
    });
}, function(error) {
    console.log(error);
});
