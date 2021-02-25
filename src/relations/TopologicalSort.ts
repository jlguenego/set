import {RelationClosure} from '..';
import {RelationOn} from './RelationOn';
export const topologicalSort = <T>(
  partialOrder: RelationOn<T>,
  domain: Set<T>
): RelationOn<T> => {
  const plusOrder = RelationClosure.buildRPlus(domain, partialOrder);
  if (!plusOrder.isPartialOrder(domain)) {
    throw new Error('Cannot do a topological sort on non partial order');
  }
  const ai = new Set(domain);
  const result: T[] = [];
  while (ai.size > 0) {
    const minA = [...ai].find(a => {
      for (const b of ai) {
        if (plusOrder.test(b, a)) {
          return false;
        }
      }
      return true;
    });
    if (minA === undefined) {
      throw new Error('you should not come here');
    }
    ai.delete(minA);
    result.push(minA);
  }
  return new RelationOn<T>((a, b) => result.indexOf(a) < result.indexOf(b));
};
