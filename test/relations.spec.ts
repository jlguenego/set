import {Relation} from './../src/Relation';
import assert from 'assert';

describe('Relation Unit Test', () => {
  it('test relation_definition', () => {
    const lessThan = new Relation<number, number>((a, b) => a < b);
    assert.deepStrictEqual(lessThan.test(11, 2), false);
  });
});
