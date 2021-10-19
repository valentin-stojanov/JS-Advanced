const { expect } = require("chai");
const rgbToHexColor = require('./rgb');

describe('RGB Convertor', ()=>{
    describe('Happy path', ()=>{
        it('converts white', ()=>{
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        });
    
        it('converts to black', ()=>{
            expect(rgbToHexColor(0,0,0)).to.equal('#000000');
        });
    });

    describe('Invalid parameter', ()=>{

    });
    

});