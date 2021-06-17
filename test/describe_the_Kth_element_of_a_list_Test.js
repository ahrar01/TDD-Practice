const chai = require("chai");
const expect = chai.expect;

const findKthElement = require("../describe_the_Kth_element_of_a_list");


describe.only("find Kth element in a list", () => {
  context("when the list is empty", () => {
    it("should return nothing", () => {
      let result = findKthElement([], 5);
      expect(result).to.be.undefined;
    });
  });

  context("when the list contains one element", () => {
    it("should return the first element", () => {
      let result = findKthElement([100], 0);
      expect(result).to.be.eql(100);
    });
  });

  context("when the list contains many element", () => {
    it("should return the Kth element", () => {
      let result = findKthElement([100, 101, 103],1);
      expect(result).to.be.eql(101);
    });
  });
});