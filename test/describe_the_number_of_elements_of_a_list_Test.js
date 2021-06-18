const chai = require("chai");
const expect = chai.expect;

const findLengthOfList = require("../the_number_of_elements_of_a_list");

describe.only("find the Number of element in a list", () => {
  context("when the list is empty", () => {
    it("should return nothing", () => {
      let result = findLengthOfList([]);
      expect(result).to.be.undefined;
    });
  });

  context("when the list contains one element", () => {
    it("should return the first element", () => {
      let result = findLengthOfList([100]);
      expect(result).to.be.eql(1);
    });
  });

  context("when the list contains many element", () => {
    it("should return the length of list", () => {
      let result = findLengthOfList([100, 101, 103]);
      expect(result).to.be.eql(3);
    });
  });
});
