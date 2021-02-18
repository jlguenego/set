import {OrderedPair} from './../src/OrderedPair';
import {RelationOn} from './../src';
import assert from 'assert';

describe('Relation Unit Test', () => {
  it('test nextClosure', () => {
    const domain = new Set([1, 2, 3]);
    const r = RelationOn.fromSet(
      new Set([new OrderedPair(1, 2), new OrderedPair(2, 3)])
    );
    const r2 = r.buildRNext(domain, r);
    const r3 = r.buildRNext(domain, r2);
    assert.deepStrictEqual(r2.getSet(domain), new Set([new OrderedPair(1, 3)]));
    assert.deepStrictEqual(r3.getSet(domain), new Set([]));
  });
  it('test buildRStar', () => {
    const domain = new Set([1, 2, 3]);
    const r = RelationOn.fromSet(
      new Set([new OrderedPair(1, 2), new OrderedPair(2, 3)])
    );
    const rstar = r.buildRStar(domain);
    assert.deepStrictEqual(
      rstar.getSet(domain),
      new Set([
        new OrderedPair(1, 2),
        new OrderedPair(2, 3),
        new OrderedPair(1, 3),
      ])
    );
  });
});
