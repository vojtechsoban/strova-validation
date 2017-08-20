import {expect} from 'chai';
import {isInteger, isNumber} from '../index';


describe('testing numbers', () => {
  describe('testing all numbers', () => {
    it('isNumber return false for null', () => {
      expect(isNumber(null)).to.be.false;
    });
    it('isNumber return false for undefined', () => {
      expect(isNumber(undefined)).to.be.false;
    });
    it('isNumber return false for "abc"', () => {
      expect(isNumber('abc')).to.be.false;
    });
    it('isNumber return true for 123.456', () => {
      expect(isNumber(123.456)).to.be.true;
    });
    it('isNumber return true for -1e6', () => {
      expect(isNumber(-1e6)).to.be.true;
    });
    it('isNumber return true for 123', () => {
      expect(isNumber(123)).to.be.true;
    });
    it('isNumber return true for -123', () => {
      expect(isNumber(-123)).to.be.true;
    });
    it('isNumber return true for 0', () => {
      expect(isNumber(0)).to.be.true;
    });
  });

  describe('testing integers', () => {
    it('isInteger return false for null', () => {
      expect(isInteger(null)).to.be.false;
    });
    it('isInteger return false for undefined', () => {
      expect(isInteger(undefined)).to.be.false;
    });
    it('isInteger return false for "abc"', () => {
      expect(isInteger('abc')).to.be.false;
    });
    it('isInteger return false for 123.456', () => {
      expect(isInteger(123.456)).to.be.false;
    });
    it('isInteger return true for 123', () => {
      expect(isInteger(123)).to.be.true;
    });
    it('isInteger return true for -123', () => {
      expect(isInteger(-123)).to.be.true;
    });
    it('isInteger return true for 0', () => {
      expect(isInteger(0)).to.be.true;
    });
  });
});
