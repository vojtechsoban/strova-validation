import {expect} from 'chai';
import {notNull, isNull, notBlank, min} from '../index';

const validateUser = (firstName, middleName, lastName, age) => (
  notBlank(firstName)
  && (isNull(middleName) || notBlank(middleName))
  && notBlank(lastName)
  && (notNull(age) && min(age, 1))
);

describe('testing example from READE.MD', () => {
  describe('Happy path tests', () => {
    it('John Doe, 18 years', () => {
      expect(validateUser('John', null, 'Doe', 18)).to.be.true
    });
    it('John Max Doe, 18 years', () => {
      expect(validateUser('John', 'Max', 'Doe', 18)).to.be.true
    });
  });

  describe('Rainy days tests', () => {
    it('John, 18 years', () => {
      expect(validateUser('John', null, null, 18)).to.be.false
    });
    it('Doe, 18 years', () => {
      expect(validateUser(null, null, 'Doe', 18)).to.be.false
    });
    it('Max, 18 years', () => {
      expect(validateUser(null, 'Max', null, 18)).to.be.false
    });
    it('John, 18 years', () => {
      expect(validateUser('John', null, 'Doe', 0)).to.be.false
    });
    it('John Max Doe, 0 years', () => {
      expect(validateUser('John', 'Max', 'Doe', 0)).to.be.false
    });
    it('John Max Doe, 0 years', () => {
      expect(validateUser('John', 'Max', 'Doe', 0)).to.be.false
    });
    it('John Max Doe', () => {
      expect(validateUser('John', 'Max', 'Doe')).to.be.false
    });
  });
});
