module.exports = require('./router').then(function(router) {
    var application = require('express')();
    application.use(router);
    return application;
});
