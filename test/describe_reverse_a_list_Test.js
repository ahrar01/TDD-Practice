const chai = require("chai");
const expect = chai.expect;

const reverseList = require("../reverse_a_list");

describe.only("Reverse the element in a list", () => {
  context("when the list is empty", () => {
    it("should return nothing", () => {
      let result = reverseList([]);
      expect(result).to.be.undefined;
    });
  });

  context("when the list contains one element", () => {
    it("should return the first element", () => {
      let result = reverseList([1]);
      expect(result).to.be.eql([1]);
    });
  });

  context("when the list contains many element", () => {
    it("should return the reverse element", () => {
      let result = reverseList([1, 2, 3]);
      expect(result).to.be.eql([3,2,1]);
    });
  });
});
