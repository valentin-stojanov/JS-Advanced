const { expect } = require('chai');
const rgbToHexColor = require('./rgb');

describe('RGB to HEX converter', () => {
    describe('Happy path', () => {
        it('returns white', () => {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        });

        it('returns black', () => {
            expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        });
        it('returns #FF9EAA', () => {
            expect(rgbToHexColor(255, 158, 170)).to.equal('#FF9EAA');
        });
    });

    describe('Invalid input parameters', () => {
        it('returns undefined for no parameter', () => {
            expect(rgbToHexColor()).to.equal(undefined);
        });

        it('returns undefined for invalid type parameter - one string input', () => {
            expect(rgbToHexColor('white')).to.equal(undefined);
        });

        it('returns undefined for invalid type parameter', () => {
            expect(rgbToHexColor('2', 2, 2)).to.equal(undefined);
        });
    });

    describe('Not in expected range', () => {
        it('returns undefined for negative input parameters', () => {
            expect(rgbToHexColor(-1, 0, 0)).to.equal(undefined);
        });it('returns undefined for negative input parameters', () => {
            expect(rgbToHexColor(0, -1, 0)).to.equal(undefined);
        });it('returns undefined for negative input parameters', () => {
            expect(rgbToHexColor(0, 0, -1)).to.equal(undefined);
        });

        it('returns undefined for input parameters bigger than 255', () => {
            expect(rgbToHexColor(256, 0, 0)).to.equal(undefined);
        });it('returns undefined for input parameters bigger than 255', () => {
            expect(rgbToHexColor(0, 256, 0)).to.equal(undefined);
        });it('returns undefined for input parameters bigger than 255', () => {
            expect(rgbToHexColor(0, 0, 256)).to.equal(undefined);
        });
    });

});