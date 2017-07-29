import {expect} from 'chai';
import * as t from '../types';

import {assert} from '../index';

describe('Main assert', () => {
  it.skip('notBlank return true for "hello"', () => {
    expect(assert('hello', t.KEYWORD_NOT_BLANK)).to.be.true;
  });
  it.skip('notBlank return false for " "', () => {
    expect(assert(' ', t.KEYWORD_NOT_BLANK)).to.be.false;
  });
  it.skip('notBlank return false for null', () => {
    expect(assert(null, t.KEYWORD_NOT_BLANK)).to.be.false;
  });
  it.skip('notBlank return true for null with nullable', () => {
    expect(assert(null, t.KEYWORD_NOT_BLANK, null, null, true)).to.be.true;
  });
});
