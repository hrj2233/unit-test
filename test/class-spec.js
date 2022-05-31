const chai = require("chai");
const { userInfo } = require("os");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let word;
  beforeEach(() => {
    word = new Word("test");
  });

  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(word).to.exist;
    });

    it('should set the "word" property when a new word is created', function () {
      expect(word).to.exist;
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      let test2 = word.removeVowels();
      expect(test2).to.equal("tst");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      let test3 = word.removeConsonants();
      expect(test3).to.equal("e");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      let test4 = word.pigLatin();
      expect(test4).to.equal("esttay");
    });
  });
});
