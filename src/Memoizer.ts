const toIdString = (o: Object): string =>
  o.constructor.name + JSON.stringify(o);

export class MemoCache {
  static handle<T>(o: T): T {
    const id = toIdString(o);
    const cached = MemoCache.map.get(id);
    if (cached) {
      return cached.deref() as T;
    }
    MemoCache.map.set(id, new WeakRef(o as Object));
    return o;
  }

  static map = new Map<string, WeakRef<Object>>();
}
