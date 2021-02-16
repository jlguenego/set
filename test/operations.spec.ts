import assert from 'assert';
import {Sets} from '../src';

describe('Operations Unit Test', () => {
  it('test union', () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([3, 4, 5]);
    const c = Sets.union(a, b);
    assert.deepStrictEqual(c, new Set([1, 2, 3, 4, 5]));
  });
  it('test equality', () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([3, 2, 1]);
    const c = Sets.areEquals(a, b);
    assert.deepStrictEqual(c, true);
  });
  it('test non equality', () => {
    const a = new Set([1, 2]);
    const b = new Set([3, 2, 1]);
    const c = Sets.areEquals(a, b);
    assert.deepStrictEqual(c, false);
  });
  it('test includes', () => {
    const a = new Set([1, 2]);
    const b = new Set([3, 2, 1]);
    const c = Sets.includes(a, b);
    assert.deepStrictEqual(c, true);
  });
  it('test intersection', () => {
    const a = new Set([1, 2, 6]);
    const b = new Set([3, 2, 1]);
    const c = Sets.intersection(a, b);
    assert.deepStrictEqual(c, new Set([1, 2]));
  });
});
