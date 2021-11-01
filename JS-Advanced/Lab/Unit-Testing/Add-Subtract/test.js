const { expect} = require('chai');
const createCalculator = require('./add');

describe('Add / Subtract checker', () => {
    let instance = null;

    beforeEach(() => {
        instance = createCalculator();
    });

    it('has all methods', ()=>{
        expect(instance).to.has.ownProperty('add');
        expect(instance).to.has.ownProperty('subtract');
        expect(instance).to.has.ownProperty('get');
    })

    it('Initial value to be equal zero', () => {
        expect(instance.get()).to.equal(0);
    });

    it('Keep internal sum', () => {
        instance.add(1);
        expect(instance.get()).to.equal(1);
    });

    it('The functions add() and subtract() take a parameter that can be parsed as a number ', () => {
        instance.add('1');
        instance.add('3');
        instance.subtract('5');
        expect(instance.get()).to.equal(-1);
    });
});