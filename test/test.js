const chai = require('chai');

chai.should();

const scoreThrows = require('./calc_score.js');

describe('Evaluate the radiuses in the array and calculate a score', function () {

	it('should return a number', () => {
		scoreThrows.should.be.a('number');
	});

});