import  'mocha/mocha.css';
import mocha from "mocha/mocha-es2018";
import chai  from  'chai';

var expect = chai.expect;



describe("String",function () {
    it('should be a number ',function(){
        expect(43).to.not.be.a('number');
    });
});


