'use strict';

describe('subtraction', function () {
    it('should subtract 1-1 correctly', function (done) {
        var onePlusOne = 1 - 1;
        onePlusOne.should.equal(0);
        // must call done() so that mocha know that we are... done.
        // Useful for async tests.
        done();
   });
 });