import {expect} from 'chai';
import {notEmpty} from '../index';

describe('notEmpty', () => {
  describe('when testing null/undefined', () => {
    it('return false for undefined', () => {
      expect(notEmpty(undefined)).to.be.false;
    });
    it('return false for null', () => {
      expect(notEmpty(null)).to.be.false;
    });
  });

  describe('when testing an array', () => {
    it('return true for one sized array', () => {
      expect(notEmpty(['a'])).to.be.true;
    });
    it('return true for an empty array', () => {
      expect(notEmpty([])).to.be.false;
    });
  });

  describe('when testing string', () => {
    it('return true for non empty string including white space', () => {
      expect(notEmpty(' ')).to.be.true;
    });
    it('return false for empty string', () => {
      expect(notEmpty('')).to.be.false;
    });
  });

  describe('when testing an object', () => {
    it('return false for an object with properties', () => {
      const obj = {};
      obj.property = 'property';
      expect(notEmpty(obj)).to.be.true;
    });
    it('return true for an empty object', () => {
      expect(notEmpty({})).to.be.false;
    });
  });

  describe('when testing a number', () => {
    it('return true when a number', () => {
      expect(notEmpty(0)).to.be.true;
      expect(notEmpty(10)).to.be.true;
      expect(notEmpty(-1.1)).to.be.true;
    });
  });
});
