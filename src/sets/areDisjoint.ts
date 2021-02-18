import {getDistinctCouples} from '../couples';
import {intersection} from './intersection';

/**
 * Test if all sets are disjoint.
 * If 2 sets have not empty intersection, then return false.
 *
 * @template T
 * @param {...Set<T>[]} sets
 * @memberof Sets
 */
export const areDisjoint = <T>(firstSet: Set<T>, ...otherSets: Set<T>[]) => {
  for (const {first, second} of getDistinctCouples(firstSet, ...otherSets)) {
    if (intersection(first, second).size > 0) {
      return false;
    }
  }
  return true;
};
