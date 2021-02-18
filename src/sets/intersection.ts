/**
 * Builds a new set = a ∩ b
 *
 * @static
 * @template T
 * @param {...Set<T>[]} sets
 * @returns {Set<T>}
 * @memberof Sets
 */
export const intersection = <T>(...sets: Set<T>[]): Set<T> => {
  const result = new Set<T>();
  for (const e of sets[0]) {
    let found = true;
    for (const set of sets.slice(1)) {
      if (!set.has(e)) {
        found = false;
        break;
      }
    }
    if (found) {
      result.add(e);
    }
  }
  return result;
};
