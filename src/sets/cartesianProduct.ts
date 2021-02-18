/**
 * Builds the cartesian product of e and f.
 * E X F = {(a,b)|a∊E, b∊F}
 *
 * @template T
 * @template U
 * @param {Set<T>} e
 * @param {Set<U>} f
 * @returns {Set<[T, U]>}
 */
export const cartesianProduct = <T, U>(e: Set<T>, f: Set<U>): Set<[T, U]> => {
  const result = new Set<[T, U]>();
  for (const a of e) {
    for (const b of f) {
      result.add([a, b]);
    }
  }
  return result;
};
