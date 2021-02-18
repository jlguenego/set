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

  buildRNext(domain: Set<T>, r: RelationOn<T>): RelationOn<T> {
    return new RelationOn<T>((a, b) => {
      for (const {second: c} of this.getSet(domain)) {
        if (this.test(a, c) && r.test(c, b)) {
          return true;
        }
      }
      return false;
    });
  }

  buildRPlus(domain: Set<T>): RelationOn<T> {
    const result = new Set<OrderedPair<T, T>>(this.getSet(domain));
    let ri = this as RelationOn<T>;
    let previousSize = 0;
    let size = result.size;
    while (previousSize < size) {
      ri = this.buildRNext(domain, ri);
      Sets.absorb(result, ri.getSet(domain));
      previousSize = size;
      size = result.size;
    }
    return RelationOn.fromSet(result);
  }

  buildRStar(domain: Set<T>): RelationOn<T> {
    const result = this.buildRPlus(domain).getSet(domain);
    Sets.absorb(
      result,
      new RelationOn((t1: T, t2: T) => t1 === t2).getSet(domain)
    );
    return RelationOn.fromSet(result);
  }
}
