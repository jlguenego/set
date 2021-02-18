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
}
