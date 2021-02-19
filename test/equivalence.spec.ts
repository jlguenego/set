import {EquivalenceRelation, RelationOn} from './../src';
import assert from 'assert';

describe('Relation Unit Test', () => {
  it('test equivalenceRelation', () => {
    const equalRelation = new EquivalenceRelation<string>(
      new RelationOn((a, b) => a === b),
      new Set(['toto', 'titi', 'tata'])
    );
    assert(equalRelation);
  });
  it('test equivalenceClasses', () => {
    const domain = new Set(Array(6).keys());
    const equalRelation = new EquivalenceRelation(
      new RelationOn<number>((a, b) => a % 3 === b % 3),
      domain
    );
    const classes = equalRelation.getEquivalenceClasses(domain);
    assert.deepStrictEqual(
      classes,
      new Set([new Set([0, 3]), new Set([1, 4]), new Set([2, 5])])
    );
  });
  it('test equivalenceIndex', () => {
    const domain = new Set(Array(6).keys());
    const equalRelation = new EquivalenceRelation(
      new RelationOn<number>((a, b) => a % 3 === b % 3),
      domain
    );
    const index = equalRelation.getEquivalenceIndex(domain);
    assert.deepStrictEqual(index, 3);
  });
});
