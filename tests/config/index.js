
require('./defaults');

var config = require('../../config');
var expect = require('chai').expect;

describe('config', function() {

    it('is a promise', function() {
        expect(config.then).to.be.a('function');
    });

});

describe('config[result]', function() {

    it('is an object', function(done) {
        config.then(function(result) {
            expect(result).to.be.an('object');
            done();
        });
    });

    it('has a property named "database" of type "object"', function() {
        config.then(function(result) {
            expect(result.database).to.be.an('object');
            done();
        });
    });

    it('has a property named "server" of type "object"', function() {
        config.then(function(result) {
            expect(result.server).to.be.an('object');
            done();
        });
    });

    it('has a property named "token" of type "object"', function() {
        config.then(function(result) {
            expect(result.token).to.be.an('object');
            done();
        });
    });

});
