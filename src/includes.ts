/**
 * test if a ⊂ b
 *
 * @static
 * @template T
 * @param {Set<T>} a
 * @param {Set<T>} b
 * @returns {boolean}
 * @memberof Sets
 */
export const includes = <T>(a: Set<T>, b: Set<T>): boolean => {
  if (a.size > b.size) {
    return false;
  }
  for (const e of a) {
    if (!b.has(e)) {
      return false;
    }
  }
  return true;
};
