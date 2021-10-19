const { expect } = require('chai');
const isSymmetric = require('./symmetry');
const symmetry = require('./symmetry');

describe('Symmetry checker', () => {
    it('returns true for symmetryc array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('returns false for non symmetryc array', () =>{
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('returns false for non array input', () =>{
        expect(isSymmetric(5)).to.be.false;
    });

    it('returns false for type-different symmetryc array', () =>{
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    });

    // Test overloading
    it('returns true for symmetryc array of odd number of elements', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('returns true for symmetryc array with strings', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    });

});