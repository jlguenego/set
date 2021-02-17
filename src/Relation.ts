export type RelationSpec<T, U> = (t: T, u: U) => boolean;

export class Relation<T, U> {
  constructor(public spec: RelationSpec<T, U>) {}
  test(a: T, b: U) {
    return this.spec(a, b);
  }
  getInverse(): Relation<U, T> {
    const inverseSpec = (b: U, a: T) => this.spec(a, b);
    return new Relation(inverseSpec);
  }
}
