import {OrderedPair} from './../src/OrderedPair';
import {RelationClosure, RelationOn} from './../src';
import assert from 'assert';

describe('RelationClosure Unit Test', () => {
  it('test nextClosure', () => {
    const domain = new Set([1, 2, 3]);
    const r = RelationOn.fromSet(
      new Set([new OrderedPair(1, 2), new OrderedPair(2, 3)])
    );
    const r2 = RelationClosure.buildRNext(domain, r, r);
    const r3 = RelationClosure.buildRNext(domain, r, r2);
    assert.deepStrictEqual(r2.getSet(domain), new Set([new OrderedPair(1, 3)]));
    assert.deepStrictEqual(r3.getSet(domain), new Set([]));
  });
  it('test buildRplus', () => {
    const domain = new Set([1, 2, 3]);
    const r = RelationOn.fromSet(
      new Set([new OrderedPair(1, 2), new OrderedPair(2, 3)])
    );
    const rstar = RelationClosure.buildRPlus(domain, r);
    assert.deepStrictEqual(
      rstar.getSet(domain),
      new Set([
        new OrderedPair(1, 2),
        new OrderedPair(2, 3),
        new OrderedPair(1, 3),
      ])
    );
  });
  it('test buildRstar', () => {
    const domain = new Set([1, 2, 3]);
    const r = RelationOn.fromSet(
      new Set([new OrderedPair(1, 2), new OrderedPair(2, 3)])
    );
    const rstar = RelationClosure.buildRStar(domain, r);
    assert.deepStrictEqual(
      rstar.getSet(domain),
      new Set([
        new OrderedPair(1, 2),
        new OrderedPair(2, 3),
        new OrderedPair(1, 3),
        new OrderedPair(1, 1),
        new OrderedPair(2, 2),
        new OrderedPair(3, 3),
      ])
    );
  });
});
