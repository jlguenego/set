export const expectedDisjointCouples = [
  {a: 1, b: 2},
  {a: 1, b: 3},
  {a: 1, b: 4},
  {a: 1, b: 5},
  {a: 2, b: 1},
  {a: 2, b: 3},
  {a: 2, b: 4},
  {a: 2, b: 5},
  {a: 3, b: 1},
  {a: 3, b: 2},
  {a: 3, b: 4},
  {a: 3, b: 5},
  {a: 4, b: 1},
  {a: 4, b: 2},
  {a: 4, b: 3},
  {a: 4, b: 5},
  {a: 5, b: 1},
  {a: 5, b: 2},
  {a: 5, b: 3},
  {a: 5, b: 4},
];

export const expectedPowerset: Set<Set<number>> = new Set([
  new Set(),
  new Set([1]),
  new Set([2]),
  new Set([3]),
  new Set([1, 2]),
  new Set([1, 3]),
  new Set([2, 3]),
  new Set([1, 2, 3]),
]);

export const expectedCartesianProduct = new Set<[number, string]>([
  [1, 'a'],
  [1, 'b'],
  [1, 'c'],
  [2, 'a'],
  [2, 'b'],
  [2, 'c'],
]);
