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
}
