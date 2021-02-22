import assert from 'assert';
import {MemoCache} from '../src';

describe('Memocache Unit Test', () => {
  it('test Memocache', () => {
    class Word {
      constructor(public symbols: symbol[]) {
        return MemoCache.handle(this);
      }
    }
    const a = Symbol('a');
    const b = Symbol('b');

    const w1 = new Word([a, b]);
    const w2 = new Word([a, b]);

    assert.deepStrictEqual(w1 === w2, true);
  });
  it('test Memocache.retrieveFromCache', () => {
    class Word {
      constructor(public symbols: symbol[]) {
        return MemoCache.handle(this);
      }
    }

    const a = Symbol('a');
    const b = Symbol('b');

    const w1 = new Word([a, b]);
    const w2 = new Word([a, b]);

    const w3 = Object.create(Word.prototype) as Word;
    w3.symbols = [a, b];
    const w4 = Object.create(Word.prototype) as Word;
    w4.symbols = [a];

    assert.deepStrictEqual(MemoCache.retrieveFromCache(w1) === w2, true);
    assert.deepStrictEqual(MemoCache.retrieveFromCache(w3) === w2, true);
    assert.deepStrictEqual(MemoCache.retrieveFromCache(w4) === undefined, true);
  });
});
