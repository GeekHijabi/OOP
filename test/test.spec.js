const assert = require('chai').assert;
const expect = require('chai').expect
const should = require('chai').should
const app = require('../src/index.js');
const nuclearFamily = require('../src/index.js').nuclearFamily;
const Employee = require('../src/index.js').Employee;
const extendedFamily = require('../src/index.js').extendedFamily;
const Friends = require('../src/index.js').Friends;
const Rex = new nuclearFamily ('Rex','Adam',19,'male', '1');
const June = new nuclearFamily ('June','Adam',21,'female', 'second');
const Jane = new extendedFamily ('Jane','Brown',32,'female','cousin');
const Dave = new Friends ('Dave','Rus',21);
const Kunle = new Employee ('Kunle','cook');


describe('Test for methods in base classes', () => {
  describe('Ensure all methods are functional', () => {
    it('Rex.getCategory() should return Rex Adam is a Son', () => {
      expect(Rex.getCategory()).to.be.equal('Rex Adam is a Son');
    });
    it('Rex.getStatus() should return Rex is the number 1 child', () => {
      expect(Rex.getStatus()).to.be.equal('Rex is the number 1 child');
    });
    it('June.getBasicInformation() should return June is 21 years old, a female and the second in the family.', () => {
      expect(June.getBasicInformation()).to.be.equal('June is 21 years old, a female and the second in the family.');
    });
    it('Rus.relationship() should return Rus is a friend', () => {
      expect(Dave.relationship()).to.be.equal('Rus is a friend');
    });
  })
})