import assert from 'assert';
import {Mapping, RelationOn} from '../src';

describe('Mapping Unit Test', () => {
  it('test isMapping', () => {
    const m = new Mapping(
      new RelationOn<number>((a, b) => b === a * a),
      new Set(Array(10).keys()),
      new Set(Array(50).keys())
    );
    assert(m);
  });
  it('test isDefined', () => {
    const m = new Mapping(
      new RelationOn<number>((a, b) => b === a * a),
      new Set(Array(10).keys()),
      new Set(Array(50).keys())
    );
    assert.deepStrictEqual(m.isDefined(3), true);
    assert.deepStrictEqual(m.isDefined(8), false);
  });
  it('test isTotal', () => {
    const m = new Mapping(
      new RelationOn<number>((a, b) => b === a * a),
      new Set(Array(10).keys()),
      new Set(Array(50).keys())
    );
    assert.deepStrictEqual(m.isTotal(), false);
  });
  it('test isTotal_true', () => {
    const m = new Mapping(
      new RelationOn<number>((a, b) => b === a * a),
      new Set(Array(10).keys()),
      new Set(Array(100).keys())
    );
    assert.deepStrictEqual(m.isTotal(), true);
  });
  it('test isPartial', () => {
    const m = new Mapping(
      new RelationOn<number>((a, b) => b === a * a),
      new Set(Array(10).keys()),
      new Set(Array(50).keys())
    );
    assert.deepStrictEqual(m.isPartial(), true);
  });
  it('test isInjection', () => {
    const m = new Mapping(
      new RelationOn<number>((a, b) => b === a * a),
      new Set(Array(10).keys()),
      new Set(Array(50).keys())
    );
    assert.deepStrictEqual(m.isInjection(), true);
  });
  it('test isInjection_false', () => {
    const m = new Mapping(
      new RelationOn<number>((a, b) => b === a * a),
      new Set(new Array(20).fill(0).map((n, i) => i - 10)),
      new Set(Array(100).keys())
    );
    assert.deepStrictEqual(m.isInjection(), false);
  });
});
