
var expect = require('chai').expect;
var projects = require('../../database/projects');

describe('database/projects', function() {

    it('is a promise', function() {
        expect(projects.then).to.be.a('function');
    });

});

describe('database/projects[result]', function() {

    it('is an object', function(done) {
        projects.then(function(projects) {
            expect(projects).to.be.an('object');
            done();
        });
    });

    describe('get()', function() {

        it('is a function', function(done) {
            projects.then(function(projects) {
                expect(projects.get).to.be.a('function');
                done();
            });
        });

        it('returns a promise', function(done) {
            projects.then(function(projects) {
                var value = projects.get();
                expect(value.then).to.be.a('function');
                value.then(function(){}, function(){});
                done();
            });
        });

    });

    describe('insert()', function() {

        it('is a function', function(done) {
            projects.then(function(projects) {
                expect(projects.insert).to.be.a('function');
                done();
            });
        });

        it('returns a promise', function(done) {
            projects.then(function(projects) {
                var value = projects.insert();
                expect(value.then).to.be.a('function');
                value.then(function(){}, function(){});
                done();
            });
        });

    });

});
