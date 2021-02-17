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
});
