import {expect} from 'chai';
import {min} from '../index';


describe('testing min', () => {

  const MIN_VALUE = 1000;

  it('return true when passing null argument', () => {
    expect(min(null, MIN_VALUE)).to.be.true;
  });
  it('return true when passing undefined argument', () => {
    expect(min(undefined, MIN_VALUE)).to.be.true;
  });
  it(`return true when comparing ${MIN_VALUE + 1} and ${MIN_VALUE}`, () => {
    expect(min(MIN_VALUE + 1, MIN_VALUE)).to.be.true;
  });
  it(`return true when comparing ${MIN_VALUE} and ${MIN_VALUE}`, () => {
    expect(min(MIN_VALUE, MIN_VALUE)).to.be.true;
  });
  it(`return false when comparing ${MIN_VALUE - 1} and ${MIN_VALUE}`, () => {
    expect(min(MIN_VALUE - 1, MIN_VALUE)).to.be.false;
  });
});
