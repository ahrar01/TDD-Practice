const chai = require("chai");
const expect = chai.expect;

const flattenList = require("../describe_flatten_a_nested_list_structure");

describe.only("Flatten a nested list structure", () => {
  context("when the list is empty", () => {
    it("should return nothing", () => {
      let result = flattenList([]);
      expect(result).to.be.undefined;
    });
  });

  context("when the list contains one element", () => {
    it("should return the first element", () => {
      let result = flattenList([[1]]);
      expect(result).to.be.eql([1]);
    });
  });

  context("when the list contains many element", () => {
    it("should return the faltten elements", () => {
      let result = flattenList([
        [[0], [1]],
        [[2], [3]],
        [[4], [5]],
      ]);
      expect(result).to.be.eql([0, 1, 2, 3, 4, 5]);
    });
  });
});
