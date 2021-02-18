import {areDisjoint} from './areDisjoint';
import {cartesianProduct} from './cartesianProduct';
import {includes} from './includes';
import {intersection} from './intersection';
import {powerSet} from './powerSet';

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

  static intersection = intersection;

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

  static includes = includes;

  static properlyInclude = <T>(a: Set<T>, b: Set<T>): boolean => {
    return Sets.includes(a, b) && !Sets.areEquals(a, b);
  };

  static areDisjoint = areDisjoint;

  static powerSet = powerSet;

  static cartesianProduct = cartesianProduct;
}
