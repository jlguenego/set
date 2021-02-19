import {RelationOn} from './RelationOn';
export class EquivalenceRelation<T> {
  constructor(public r: RelationOn<T>, domain: Set<T>) {
    if (
      !(
        this.r.isReflexive(domain) &&
        this.r.isSymmetric(domain) &&
        this.r.isTransitive(domain)
      )
    ) {
      throw new Error(
        'This is not an equivalence relation on the given domain'
      );
    }
  }

  getEquivalenceClasses(domain: Set<T>): Set<Set<T>> {
    const result = new Set<Set<T>>();
    for (const a of domain) {
      let found = false;
      for (const eqClass of result) {
        const b = [...eqClass][0];
        if (this.r.test(a, b)) {
          eqClass.add(a);
          found = true;
          break;
        }
      }
      if (found === false) {
        result.add(
          new Set<T>([a])
        );
      }
    }

    return result;
  }

  getEquivalenceIndex(domain: Set<T>): number {
    return this.getEquivalenceClasses(domain).size;
  }
}
