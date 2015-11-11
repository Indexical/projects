
module.exports = Promise.all([
    require('http'),
    require('util'),
    require('../../database/projects'),
    require('ajv')().compile(require('../../schemas/project')),
    require('../helpers/require-token'),
    require('../helpers/parse-json-body')
]).then(function(results) {
    var http = results[0];
    var util = results[1];
    var projects = results[2];
    var validator = results[3];
    var requireToken = results[4];
    var parseJsonBody = results[5];
    return [
        requireToken,
        parseJsonBody,
        checkRequestBody,
        validateRequestBody,
        insertRecord
    ];
    function checkRequestBody(request, response, next) {
        if (typeof request.body != 'object' || request.body === null) {
            response.status(400).send({
                statusCode: 400,
                message: util.format('%s request must have a JSON encoded body', request.baseUrl)
            });
        } else {
            next();
        }
    }
    function validateRequestBody(request, response, next) {
        validator.validate(request.body);
        if (validator.errors) {
            response.status(400).send({
                // TODO include cannonical schema url
                message: util.format('%s JSON encoded request body is not valid according to Project schema', request.baseUrl),
                errors: validator.errors
            });
        } else {
            next();
        }
    }
    function insertRecord(request, response, next) {
        projects.insert(request.body,
            function success(record) {
                response.status(200).send(record);
            },
            function failure() {
                response.status(500).send(http.STATUS_CODES[500]);
            });
    }
});
