export const getDistinctCouples = <T>(...array: T[]): {a: T; b: T}[] => {
  const result: {a: T; b: T}[] = [];
  for (const a of array) {
    const remainings = array.filter(e => e !== a);
    for (const b of remainings) {
      result.push({a, b});
    }
  }
  return result;
};
