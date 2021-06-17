const chai = require('chai');
const expect = chai.expect;

const findLastElement = require('../describe_find_the_last_element_in_the_list');

describe.only('find last element in a list',()=>{
    context('when the list is empty',()=>{
        it('should return nothing',()=>{
            let result = findLastElement([]);
            expect(result).to.be.undefined;
        });
    })

    context('when the list contains one element', () => {
        it('should return the first element', () => {
            let result = findLastElement([100]);
            expect(result).to.be.eql(100);
         })
    })

     context("when the list contains many element", () => {
       it("should return the last element", () => {
         let result = findLastElement([100,101]);
         expect(result).to.be.eql(101);
       });
     });

});