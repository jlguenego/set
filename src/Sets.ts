export class Sets {
  static absorb<T>(target: Set<T>, source: Set<T>): void {
    for (const e of source) {
      target.add(e);
    }
  }
  static union<T>(...sets: Set<T>[]): Set<T> {
    const result = new Set<T>();
    for (const set of sets) {
      Sets.absorb(result, set);
    }
    return result;
  }
}
