
var req = require('supertest');
var jwt = require('jsonwebtoken');
var tokenOptions = require('../config/defaults/token');
var token = jwt.sign({}, tokenOptions.secret, {
    audience: tokenOptions.audience,
    issuer: tokenOptions.issuer
});
var app;

before(function(done) {
    require('../app').then(function(res) {
        app = res;
        done();
    });
});

describe('GET /', function() {

    it('responds with 401 if no auth token', function(done) {
        req(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect(401, done);
    });

    // TODO test token content

    it('responds with 200 OK and JSON', function(done) {
        req(app)
            .get('/')
            .set('Accept', 'application/json')
            .set('Authorization', 'Bearer ' + token)
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

});
