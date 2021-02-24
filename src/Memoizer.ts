import {SHA3} from 'sha3';

// const hash = new SHA3(256);

const hash = (str: string) => {
  const sha3 = new SHA3(512);
  sha3.update(str);
  return sha3.digest('hex');
};

/**
 * Try to generate a unique id according the content of an object.
 *
 * @param {Object} o
 * @returns {string}
 */
export const toIdString = (o: Object): string => {
  if (typeof o === 'symbol') {
    // warning: different symbols can have the same toString() result.
    return hash('symbol_' + o.toString());
  }
  if (typeof o !== 'object') {
    return hash(typeof o + '_' + o);
  }
  if (o instanceof Set) {
    return hash('Set' + toIdString([...o]));
  }
  return hash(
    o.constructor.name +
      '{' +
      Object.keys(o)
        .map(key => key + '=' + toIdString((o as {[key: string]: Object})[key]))
        .join(',') +
      '}'
  );
};

export class MemoCache {
  static handle<T>(o: T): T {
    const id = toIdString(o);
    const cached = MemoCache.map.get(id);
    if (cached) {
      return cached.deref() as T;
    }
    MemoCache.map.set(id, new WeakRef(o as Object));
    return o;
  }

  static retrieveFromCache<T>(o: T): T | undefined {
    const id = toIdString(o);
    const cached = MemoCache.map.get(id);
    if (cached === undefined) {
      return undefined;
    }
    return cached.deref() as T;
  }

  static map = new Map<string, WeakRef<Object>>();
}
