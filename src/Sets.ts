export class Sets {
  static absorb<T>(target: Set<T>, source: Set<T>): void {
    for (const e of source) {
      target.add(e);
    }
  }
  static union<T>(...sets: Set<T>[]): Set<T> {
    const result = new Set<T>();
    for (const set of sets) {
      Sets.absorb(result, set);
    }
    return result;
  }
  static intersection<T>(...sets: Set<T>[]): Set<T> {
    const result = new Set<T>();
    for (const e of sets[0]) {
      let found = true;
      for (const set of sets.slice(1)) {
        if (!set.has(e)) {
          found = false;
          break;
        }
      }
      if (found) {
        result.add(e);
      }
    }
    return result;
  }

  static complementary<T>(a: Set<T>, b: Set<T>): Set<T> {
    const result = new Set<T>();
    for (const e of b) {
      if (!a.has(e)) {
        result.add(e);
      }
    }
    return result;
  }

  static areEquals<T>(a: Set<T>, b: Set<T>): boolean {
    if (a.size !== b.size) {
      return false;
    }
    return Sets.includes(a, b) && Sets.includes(b, a);
  }

  /**
   * test if a ⊂ b
   *
   * @static
   * @template T
   * @param {Set<T>} a
   * @param {Set<T>} b
   * @returns {boolean}
   * @memberof Sets
   */
  static includes<T>(a: Set<T>, b: Set<T>): boolean {
    if (a.size > b.size) {
      return false;
    }
    for (const e of a) {
      if (!b.has(e)) {
        return false;
      }
    }
    return true;
  }
}
