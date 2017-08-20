import {expect} from 'chai';
import {max} from '../index';


describe('testing max', () => {

  const MAX_VALUE = 1000;

  it('return true when passing null argument', () => {
    expect(max(null, MAX_VALUE)).to.be.true;
  });
  it('return true when passing undefined argument', () => {
    expect(max(undefined, MAX_VALUE)).to.be.true;
  });
  it(`return true when comparing ${MAX_VALUE-1} and ${MAX_VALUE}`, () => {
    expect(max(MAX_VALUE - 1, MAX_VALUE)).to.be.true;
  });
  it(`return true when comparing ${MAX_VALUE} and ${MAX_VALUE}`, () => {
    expect(max(MAX_VALUE, MAX_VALUE)).to.be.true;
  });
  it(`return false when comparing ${MAX_VALUE + 1} and ${MAX_VALUE}`, () => {
    expect(max(MAX_VALUE + 1, MAX_VALUE)).to.be.false;
  });
});
