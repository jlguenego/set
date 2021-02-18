import {OrderedPair} from './../src/OrderedPair';
import {Relation} from './../src';
import assert from 'assert';

describe('Relation Unit Test', () => {
  it('test relation_definition', () => {
    const lessThan = new Relation<number, number>((a, b) => a < b);
    assert.deepStrictEqual(lessThan.test(11, 2), false);
  });
  it('test relation_inverse', () => {
    const lessThan = new Relation<number, number>((a, b) => a < b);
    const moreThan = lessThan.getInverse();
    assert.deepStrictEqual(moreThan.test(2, 11), false);
  });
  it('test relation_set', () => {
    const lessThan = new Relation<number, number>((a, b) => a < b);
    const set = lessThan.getSet(new Set([1, 2, 3]), new Set([2, 3, 4]));
    assert.deepStrictEqual(
      set,
      new Set([
        new OrderedPair(1, 2),
        new OrderedPair(1, 3),
        new OrderedPair(1, 4),
        new OrderedPair(2, 3),
        new OrderedPair(2, 4),
        new OrderedPair(3, 4),
      ])
    );
  });
});
