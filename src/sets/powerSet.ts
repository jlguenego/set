/**
 * returns P(A): the powerset of A.
 * P(A) = {E|E⊂A}
 *
 * @template T
 * @param {Set<T>} set
 * @returns {Set<Set<T>>}
 * @memberof Sets
 */
export const powerSet = <T>(set: Set<T>): Set<Set<T>> => {
  const result = new Set<Set<T>>();
  const array = [...set];
  for (let i = 0; i < 2 ** set.size; i++) {
    const subset = new Set<T>();
    for (let j = 0; j < array.length; j++) {
      const x = (i % 2 ** (j + 1)) / 2 ** j;
      const bit = Math.floor(x);
      if (bit === 1) {
        subset.add(array[j]);
      }
    }
    result.add(subset);
  }
  return result;
};
