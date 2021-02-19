import {OrderedPair} from '../OrderedPair';
import {Sets} from '../sets/Sets';
import {Relation} from './Relation';

export class RelationOn<T> extends Relation<T, T> {
  static fromSet<T>(set: Set<OrderedPair<T, T>>): RelationOn<T> {
    return new RelationOn<T>((t1, t2) => set.has(new OrderedPair(t1, t2)));
  }

  /**
   * Returns the set defining the relation.
   *
   * @param {Set<T>} domain
   * @returns {Set<OrderedPair<T, T>>}
   * @memberof RelationOn
   */
  getSet(domain: Set<T>): Set<OrderedPair<T, T>> {
    return super.getSet(domain, domain);
  }

  isReflexive(domain: Set<T>): boolean {
    for (const a of domain) {
      if (!this.test(a, a)) {
        return false;
      }
    }
    return true;
  }

  isIrreflexive(domain: Set<T>): boolean {
    for (const a of domain) {
      if (this.test(a, a)) {
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

  isAsymmetric(domain: Set<T>): boolean {
    for (const a of domain) {
      for (const b of domain) {
        if (this.test(a, b) && this.test(b, a)) {
          return false;
        }
      }
    }
    return true;
  }

  isAntiSymmetric(domain: Set<T>): boolean {
    for (const a of domain) {
      for (const b of domain) {
        // a<b and b<a => a=b
        if (this.test(a, b) && this.test(b, a) && a !== b) {
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

  isPartialOrder(domain: Set<T>): boolean {
    return this.isTransitive(domain) && this.isIrreflexive(domain);
  }

  isReflexivePartialOrder(domain: Set<T>): boolean {
    return (
      this.isTransitive(domain) &&
      this.isReflexive(domain) &&
      this.isAntiSymmetric(domain)
    );
  }

  isLinearOrder(domain: Set<T>): boolean {
    if (!this.isPartialOrder(domain)) {
      return false;
    }
    for (const a of domain) {
      for (const b of domain) {
        // a<b or b<a or a=b
        if (!(this.test(a, b) || this.test(b, a) || a === b)) {
          return false;
        }
      }
    }
    return true;
  }

  isReflexiveLinearOrder(domain: Set<T>): boolean {
    if (!this.isReflexivePartialOrder(domain)) {
      return false;
    }
    for (const a of domain) {
      for (const b of domain) {
        // a<=b or b<=a
        if (!(this.test(a, b) || this.test(b, a))) {
          return false;
        }
      }
    }
    return true;
  }

  // if you want to use mapping, then use javascript map (or simply object)
  isMapping(domain: Set<T>): boolean {
    for (const a of domain) {
      for (const b of domain) {
        for (const c of domain) {
          if (this.test(a, b) && this.test(a, c) && b !== c) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
