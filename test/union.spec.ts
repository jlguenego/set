import assert from 'assert';
import {Sets} from '../src';

describe('Union Unit Test', () => {
  it('test union', () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([3, 4, 5]);
    const c = Sets.union(a, b);
    assert.deepStrictEqual(c, new Set([1, 2, 3, 4, 5]));
  });
});
