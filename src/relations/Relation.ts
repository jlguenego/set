import {OrderedPair} from '../OrderedPair';

export type RelationSpec<T, U> = (t: T, u: U) => boolean;

export class Relation<T, U> {
  /**
   * From a cartesian product set, get the relation object.
   *
   * @static
   * @template T
   * @template U
   * @param {Set<OrderedPair<T, U>>} set
   * @returns {Relation<T, U>}
   * @memberof Relation
   */
  static fromCartesianSet<T, U>(set: Set<OrderedPair<T, U>>): Relation<T, U> {
    return new Relation<T, U>((t, u) => set.has(new OrderedPair(t, u)));
  }

  constructor(public spec: RelationSpec<T, U>) {}

  /**
   * Run the relation to see if it is true or false.
   *
   * @param {T} a
   * @param {U} b
   * @returns
   * @memberof Relation
   */
  test(a: T, b: U) {
    return this.spec(a, b);
  }

  /**
   * Get the inverse relation.
   * {(b,a)|(a,b) ∊ R}
   *
   * @returns {Relation<U, T>}
   * @memberof Relation
   */
  getInverse(): Relation<U, T> {
    const inverseSpec = (b: U, a: T) => this.spec(a, b);
    return new Relation(inverseSpec);
  }

  /**
   * Get the cartesian product set defining the relation, from a domain set and a range set.
   *
   * @param {Set<T>} domain
   * @param {Set<U>} range
   * @returns {Set<OrderedPair<T, U>>}
   * @memberof Relation
   */
  getSet(domain: Set<T>, range: Set<U>): Set<OrderedPair<T, U>> {
    const result = new Set<OrderedPair<T, U>>();
    for (const a of domain) {
      for (const b of range) {
        if (this.spec(a, b)) {
          result.add(new OrderedPair(a, b));
        }
      }
    }
    return result;
  }

  isMapping(domain: Set<T>, range: Set<U>): boolean {
    for (const a of domain) {
      for (const b of range) {
        for (const c of range) {
          if (this.test(a, b) && this.test(a, c) && b !== c) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
