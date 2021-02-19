import {Sets} from '../sets/Sets';
import {RelationOn} from './RelationOn';

export class RelationClosure {
  static buildRNext<T>(
    domain: Set<T>,
    relation: RelationOn<T>,
    r: RelationOn<T>
  ): RelationOn<T> {
    return new RelationOn<T>((a, b) => {
      for (const {second: c} of relation.getSet(domain)) {
        if (relation.test(a, c) && r.test(c, b)) {
          return true;
        }
      }
      return false;
    });
  }

  static buildRPlus<T>(domain: Set<T>, relation: RelationOn<T>): RelationOn<T> {
    const result = new Set(relation.getSet(domain));
    let ri = relation;
    let previousSize = 0;
    let size = result.size;
    while (previousSize < size) {
      ri = RelationClosure.buildRNext(domain, relation, ri);
      Sets.absorb(result, ri.getSet(domain));
      previousSize = size;
      size = result.size;
    }
    return RelationOn.fromSet(result);
  }

  static buildRStar<T>(domain: Set<T>, relation: RelationOn<T>): RelationOn<T> {
    const result = RelationClosure.buildRPlus(domain, relation).getSet(domain);
    Sets.absorb(
      result,
      new RelationOn((t1: T, t2: T) => t1 === t2).getSet(domain)
    );
    return RelationOn.fromSet(result);
  }
}
