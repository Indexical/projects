
module.exports = function(error, request, response, next) {
    console.log('------- error ----------');
    console.log(error);
    console.log(' headers sent ? ' + response.headersSent);
    if (response.headersSent) {
        next(error);
    } else {
        response.status(500).send({
            statusCode: 500,
            message: http.STATUS_CODES[500]
        });
    }
};
