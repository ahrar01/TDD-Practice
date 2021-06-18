const chai = require("chai");
const expect = chai.expect;

const findPalindrome = require("../the_a_list_is_a_palindrome");

describe.only("Describe the a list is a palindrome", () => {
  context("when the list is empty", () => {
    it("should return nothing", () => {
      let result = findPalindrome([]);
      expect(result).to.be.eql(true);
    });
  });

  context("when the list contains one character", () => {
    it("should return the that character", () => {
      let result = findPalindrome([1]);
      expect(result).to.be.eql(true);
    });
  });

  context("when the list contains word character", () => {
    it("should return the true", () => {
      let result = findPalindrome([101]);
      expect(result).to.be.eql(true);
    });
  });
});
