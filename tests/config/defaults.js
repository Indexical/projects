
var expect = require('chai').expect;
var defaults = require('../../config/defaults');

describe('config/defaults', function() {

    it('is an object', function() {
        expect(defaults).to.be.an('object');
    });

    it('has a property named "database" of type "object"', function() {
        expect(defaults.database).to.be.an('object');
    });

    describe('server', function() {

        it('is an object', function() {
            expect(defaults.server).to.be.an('object');
        });

        it('has a string property named "host"', function() {
            expect(defaults.server.host).to.be.a('string');
        });

        it('has a number property named "port"', function() {
            expect(defaults.server.port).to.be.a('number');
        });

    });

    it('has a property named "token" of type "object"', function() {
        expect(defaults.token).to.be.an('object');
    });

});
