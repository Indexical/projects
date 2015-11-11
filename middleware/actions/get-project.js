
module.exports = Promise.all([
    require('http'),
    require('../../database/projects'),
    require('../helpers/require-token')
]).then(function(results) {
    var http = results[0];
    var projects = results[1];
    var requireToken = results[2];
    return [
        requireToken,
        checkParameters,
        getRecord
    ];
    function checkParameters(request, response, next) {
        if (!request.params.id) {
            next(new Error(''));
        } else {
            next();
        }
    }
    function getRecord(request, response, next) {
        projects.get(request.params.id).then(onResolved, onRejected);
        function onResolved() {
            response.status(200).send(record);
        }
        function onRejected() {
            response.status(404).send(http.STATUS_CODES[404]);
        }
    }
});
