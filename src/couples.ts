import {OrderedPair} from './OrderedPair';

export const getDistinctCouples = <T>(
  ...array: T[]
): Set<OrderedPair<T, T>> => {
  const result = new Set<OrderedPair<T, T>>();
  for (const a of array) {
    const remainings = array.filter(e => e !== a);
    for (const b of remainings) {
      result.add(new OrderedPair(a, b));
    }
  }
  return result;
};
