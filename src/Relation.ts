export type RelationSpec<T, U> = (t: T, u: U) => boolean;

export class Relation<T, U> {
  static fromCartesianSet<T, U>(set: Set<[T, U]>): Relation<T, U> {
    return new Relation<T, U>(
      (t, u) => [...set].find(([a, b]) => a === t && b === u) !== undefined
    );
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

  getSet(domain: Set<T>, range: Set<U>): Set<[T, U]> {
    const result = new Set<[T, U]>();
    for (const a of domain) {
      for (const b of range) {
        if (this.spec(a, b)) {
          result.add([a, b]);
        }
      }
    }
    return result;
  }
}
