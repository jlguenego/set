import {Relation} from './Relation';

export class RelationOn<T> extends Relation<T, T> {
  isReflexive(domain: Set<T>): boolean {
    for (const a of domain) {
      if (!this.test(a, a)) {
        return false;
      }
    }
    return true;
  }

  isSymmetric(domain: Set<T>): boolean {
    for (const a of domain) {
      for (const b of domain) {
        if (this.test(b, a) !== this.test(a, b)) {
          return false;
        }
      }
    }
    return true;
  }

  isTransitive(domain: Set<T>): boolean {
    for (const a of domain) {
      for (const b of domain) {
        for (const c of domain) {
          if (this.test(a, b) && this.test(b, c)) {
            if (this.test(a, c) === false) {
              return false;
            }
          }
        }
      }
    }
    return true;
  }

  isEquivalenceRelation(domain: Set<T>): boolean {
    return (
      this.isReflexive(domain) &&
      this.isSymmetric(domain) &&
      this.isTransitive(domain)
    );
  }

  getEquivalenceClasses(domain: Set<T>): Set<Set<T>> {
    const result = new Set<Set<T>>();
    for (const a of domain) {
      let found = false;
      for (const eqClass of result) {
        const b = [...eqClass][0];
        if (this.test(a, b)) {
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
