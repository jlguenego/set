import assert from 'assert';
import {RelationOn} from '../src';

describe('Order Unit Test', () => {
  it('test partialOrder', () => {
    const domain = new Set([1, 2, 3]);
    const lessThan = new RelationOn<number>((a, b) => a < b);
    assert.deepStrictEqual(lessThan.isPartialOrder(domain), true);
  });
});
