
module.exports = require('./config').then(function(config) {

    var router = require('express').Router();

    return Promise.all([
        require('./middleware/actions/get-user-projects'),
        require('./middleware/actions/create-project'),
        require('./middleware/actions/get-project'),
        require('./middleware/actions/update-project'),
        require('./middleware/error-logger'),
        require('./middleware/error-handler')
    ]).then(function(results) {
        router.get('/', results[0]);
        router.post('/', results[1]);
        router.get('/:id', results[2]);
        router.put('/:id', results[3]);
        router.use(results[4]);
        router.use(results[5]);
        return router;
    });

});
