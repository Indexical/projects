module.exports = Promise.all([
    require('../helpers/require-token'),
    require('../../database/projects')
]).then(function(results) {
    var requireToken = results[0];
    var projects = results[1];
    return [
        requireToken,
        getRecords
    ];
    function getRecords(request, response, next) {
        projects.all().then(onResolved, onRejected);
        function onResolved(records) {
            response.status(200).send(records);
        }
        function onRejected(error) {
            // TODO log error
            next();
        }
    }
});
