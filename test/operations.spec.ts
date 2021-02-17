import {expectedDisjointCouples} from './data/misc';
import {getDistinctCouples} from './../src/couples';
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
  it('test difference', () => {
    const a = new Set([1, 2, 6]);
    const b = new Set([3, 2, 1]);
    const c = Sets.difference(a, b);
    assert.deepStrictEqual(c, new Set([3]));
  });
  it('test disjoint', () => {
    const a = new Set([1, 2]);
    const b = new Set([3, 4]);
    const c = new Set([5, 6]);
    assert.deepStrictEqual(Sets.areDisjoint(a, b, c), true);
  });
  it('test not_disjoint', () => {
    const a = new Set([1, 2]);
    const b = new Set([3, 4]);
    const c = new Set([4, 6]);
    assert.deepStrictEqual(Sets.areDisjoint(a, b, c), false);
  });
  it('test distinctCouples', () => {
    const a = [1, 2, 3, 4, 5];
    const result = getDistinctCouples(...a);
    assert.deepStrictEqual(result, expectedDisjointCouples);
  });
});
