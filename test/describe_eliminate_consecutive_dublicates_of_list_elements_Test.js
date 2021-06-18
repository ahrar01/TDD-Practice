const chai = require("chai");
const expect = chai.expect;

const removeDuplicates = require("../describe_eliminate_consecutive_dublicates_of_list_elements");

describe.only("Elimninate consecutive duplicates of list elements", () => {
  context("when the list is empty", () => {
    it("should return nothing", () => {
      let result = removeDuplicates([]);
      expect(result).to.be.undefined;
    });
  });

  context("when the list contains one element", () => {
    it("should return the first element", () => {
      let result = removeDuplicates([1]);
      expect(result).to.be.eql([1]);
    });
  });

  context("when the list contains many elements", () => {
    it("should return the without duplicates elements", () => {
      let result = removeDuplicates([
        1, 2, 2, 5, 3, 3, 5, 5, 7, 8, 7, 7, 8, 8, 9, 9, 9, 8, 8, 2, 2,
      ]);
      expect(result).to.be.eql([1, 2, 5, 3, 5, 7, 8, 7, 8, 9, 8, 2]);
    });
  });
});
