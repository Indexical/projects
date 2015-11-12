
module.exports = require('../../config').then(function(config) {
    return [
        require('express-jwt')(config.token),
        handleError
    ];
    function handleError(error, request, response, next) {
        if (error.name == 'UnauthorizedError') {
            response.status(401).send(error);
        } else {
            next(error);
        }
    }
});
