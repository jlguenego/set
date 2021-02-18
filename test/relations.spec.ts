import {OrderedPair} from './../src/OrderedPair';
import {Relation, RelationOn} from './../src';
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
  it('test reflexive', () => {
    const equalRelation = new RelationOn<string>((a, b) => a === b);
    const result = equalRelation.isReflexive(new Set(['toto', 'titi', 'tata']));
    assert.deepStrictEqual(result, true);
  });
  it('test not_reflexive', () => {
    const lessThan = new RelationOn<string>((a, b) => a < b);
    const result = lessThan.isReflexive(new Set(['toto', 'titi', 'tata']));
    assert.deepStrictEqual(result, false);
  });
  it('test symmetric', () => {
    const equalRelation = new RelationOn<string>((a, b) => a === b);
    const result = equalRelation.isSymmetric(new Set(['toto', 'titi', 'tata']));
    assert.deepStrictEqual(result, true);
  });
  it('test not_symmetric', () => {
    const lessThan = new RelationOn<string>((a, b) => a < b);
    const result = lessThan.isSymmetric(new Set(['toto', 'titi', 'tata']));
    assert.deepStrictEqual(result, false);
  });
  it('test transitive', () => {
    const equalRelation = new RelationOn<string>((a, b) => a === b);
    const result = equalRelation.isTransitive(
      new Set(['toto', 'titi', 'tata'])
    );
    assert.deepStrictEqual(result, true);
  });
  it('test transitive_lessThan', () => {
    const lessThan = new RelationOn<string>((a, b) => a < b);
    const result = lessThan.isTransitive(new Set(['toto', 'titi', 'tata']));
    assert.deepStrictEqual(result, true);
  });
  it('test equivalenceRelation', () => {
    const equalRelation = new RelationOn<string>((a, b) => a === b);
    const result = equalRelation.isEquivalenceRelation(
      new Set(['toto', 'titi', 'tata'])
    );
    assert.deepStrictEqual(result, true);
  });
  it('test equivalenceClasses', () => {
    const domain = new Set(Array(6).keys());
    const equalRelation = new RelationOn<number>((a, b) => a % 3 === b % 3);
    const classes = equalRelation.getEquivalenceClasses(domain);
    assert.deepStrictEqual(
      classes,
      new Set([new Set([0, 3]), new Set([1, 4]), new Set([2, 5])])
    );
  });
  it('test equivalenceIndex', () => {
    const domain = new Set(Array(6).keys());
    const equalRelation = new RelationOn<number>((a, b) => a % 3 === b % 3);
    const index = equalRelation.getEquivalenceIndex(domain);
    assert.deepStrictEqual(index, 3);
  });
});
