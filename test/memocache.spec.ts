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
});
