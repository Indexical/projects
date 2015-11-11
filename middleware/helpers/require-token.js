
module.exports = require('../../config').then(function(config) {
    return require('express-jwt')(config.token);
});
