
module.exports = Promise.all([
    require('../../database/projects'),
    require('ajv')().compile(require('../../schemas/project')),
    require('../helpers/require-token'),
    require('../helpers/parse-json-body')
]).then(function(results) {
    var projects = results[0];
    var validator = results[1];
    var requireToken = results[2];
    var parseJsonBody = results[3];
    return [
        requireToken,
        parseJsonBody,
        checkParameters,
        checkRequestBody,
        validateRequestBody,
        updateRecord
    ];
    function checkParameters(request, response, next) {
        if (!request.params.id) {
            response.status(400).send({
                statusCode: 400,
                message: ''
            });
        } else {
            next();
        }
    }
    function checkRequestBody(request, response, next) {
        if (typeof request.body != 'object' || request.body === null) {
            response.status(400).send({
                statusCode: 400,
                message: ''
            });
        } else {
            next();
        }
    }
    function validateRequestBody(request, response, next) {
        validator.validate(request.body);
        if (validator.errors) {
            response.status(400).send({
                message: '',
                errors: validator.errors
            });
        } else {
            next();
        }
    }
    function updateRecord(request, response, next) {
        projects.update(request.params.id, request.body,
            function success(record) {
                response.status(200).send(record);
            },
            function failure(error) {
                response.status()
            });
    }
});
