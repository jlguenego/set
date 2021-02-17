import {cartesianProduct} from './cartesianProduct';
import {getDistinctCouples} from './couples';

export class Sets {
  /**
   * add all elements of source to target
   *
   * @static
   * @template T
   * @param {Set<T>} target
   * @param {Set<T>} source
   * @memberof Sets
   */
  static absorb<T>(target: Set<T>, source: Set<T>): void {
    for (const e of source) {
      target.add(e);
    }
  }
  /**
   * Builds a new set = a ∪ b
   *
   * @static
   * @template T
   * @param {...Set<T>[]} sets
   * @returns {Set<T>}
   * @memberof Sets
   */
  static union<T>(...sets: Set<T>[]): Set<T> {
    const result = new Set<T>();
    for (const set of sets) {
      Sets.absorb(result, set);
    }
    return result;
  }

  /**
   * Builds a new set = a ∩ b
   *
   * @static
   * @template T
   * @param {...Set<T>[]} sets
   * @returns {Set<T>}
   * @memberof Sets
   */
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

  /**
   * Build a - b.
   *
   * a - b is a set that contains all elements of a that are not elements of b.
   * a - b = {x∊a|x∉b}
   *
   * @static
   * @template T
   * @param {Set<T>} a
   * @param {Set<T>} b
   * @returns {Set<T>}
   * @memberof Sets
   */
  static difference<T>(a: Set<T>, b: Set<T>): Set<T> {
    const result = new Set<T>();
    for (const e of b) {
      if (!a.has(e)) {
        result.add(e);
      }
    }
    return result;
  }

  /**
   * Tests if a = b (a ⊂ b and b ⊂ a)
   *
   * @static
   * @template T
   * @param {Set<T>} a
   * @param {Set<T>} b
   * @returns {boolean}
   * @memberof Sets
   */
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

  /**
   * Test if all sets are disjoint.
   * If 2 sets have not empty intersection, then return false.
   *
   * @static
   * @template T
   * @param {...Set<T>[]} sets
   * @memberof Sets
   */
  static areDisjoint<T>(firstSet: Set<T>, ...otherSets: Set<T>[]) {
    for (const {a, b} of getDistinctCouples(firstSet, ...otherSets)) {
      if (Sets.intersection(a, b).size > 0) {
        return false;
      }
    }
    return true;
  }

  static powerSet<T>(set: Set<T>): Set<Set<T>> {
    const result = new Set<Set<T>>();
    const array = [...set];
    for (let i = 0; i < 2 ** set.size; i++) {
      const subset = new Set<T>();
      for (let j = 0; j < array.length; j++) {
        const x = (i % 2 ** (j + 1)) / 2 ** j;
        const bit = Math.floor(x);
        if (bit === 1) {
          subset.add(array[j]);
        }
      }
      result.add(subset);
    }
    return result;
  }

  static cartesianProduct = cartesianProduct;
}
