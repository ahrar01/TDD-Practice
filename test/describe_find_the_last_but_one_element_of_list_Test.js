const chai = require("chai");
const expect = chai.expect;

const findLastButOne = require("../describe_find_the_last_but_one_element_of_list");


describe.only("find last but one element in a list", () => {
  context("when the list is empty", () => {
    it("should return nothing", () => {
      let result = findLastButOne([]);
      expect(result).to.be.undefined;
    });
  });

     context("when the list contains one element", () => {
       it("should return nothing", () => {
         let result = findLastButOne([100]);
         expect(result).to.be.undefined;
       });
     });

     context("when the list contains two  element", () => {
       it("should return the first element", () => {
         let result = findLastButOne([100, 101]);
         expect(result).to.be.eql(100);
       });
     });
    
      context("when the list contains more than two  element", () => {
        it("should return the second element", () => {
          let result = findLastButOne([100, 101,103]);
          expect(result).to.be.eql(101);
        });
      });

});