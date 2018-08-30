var chai = require('chai');
var bloom = require('../packages/web3-utils/src/bloomFilter.js');
var assert = chai.assert;

var addressTests = [
	{bloom: '0x00000000000000000000000000000000000040000000000000000002000000000000000000008000000000000000000000000000000000000000000000000004000000000020000000000100000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000', address: '0xa0c0ffee11111111111111111111111111111111111111111111111111111111', result: true},
	{bloom: '0x00000000000000000000000000000000000040000000000000000002000000000000000000008000000000000000000000000000000000000000000000000004000000000020000000000100000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000', address: '0xa0c0ffee99999999999999999999999999999999999999999999999999999999', result: false},
];

describe('web3-utils/bloomFilter', function() {
	it('testAddress', function() {
		addressTests.forEach(function(test) {
			assert.equal(bloom.testAddress(test.bloom, test.address), test.result);
		});
	});
});