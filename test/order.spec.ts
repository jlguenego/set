import {OrderedPair} from './../src/OrderedPair';
import assert from 'assert';
import {RelationOn} from '../src';
import {topologicalSort} from '../src/relations/TopologicalSort';

describe('Order Unit Test', () => {
  it('test partialOrder', () => {
    const domain = new Set([1, 2, 3]);
    const lessThan = new RelationOn<number>((a, b) => a < b);
    assert.deepStrictEqual(lessThan.isPartialOrder(domain), true);
  });

  it('test topologicalOrder', () => {
    const domain = new Set([1, 2, 3, 0]);
    const partial = RelationOn.fromSet(new Set([new OrderedPair(1, 2)]));
    const linear = topologicalSort(partial, domain);
    const result = linear.isLinearOrder(domain);
    assert.deepStrictEqual(result, true);
  });
});
