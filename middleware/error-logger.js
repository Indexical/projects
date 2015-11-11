
module.exports = function(error, request, response, next) {
    console.error(error);
    next();
};
