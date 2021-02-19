import {Relation} from './Relation';

export class Mapping<T, U> {
  constructor(
    public r: Relation<T, U>,
    public domain: Set<T>,
    public range: Set<U>
  ) {
    if (!this.r.isMapping(domain, range)) {
      throw new Error('This is not an mapping relation on the given domain');
    }
  }

  get(a: T): U | undefined {
    for (const b of this.range) {
      if (this.r.test(a, b)) {
        return b;
      }
    }
    return undefined;
  }

  isDefined(a: T) {
    for (const b of this.range) {
      if (this.r.test(a, b)) {
        return true;
      }
    }
    return false;
  }

  isTotal() {
    for (const a of this.domain) {
      if (!this.isDefined(a)) {
        return false;
      }
    }
    return true;
  }
  isPartial() {
    return !this.isTotal();
  }

  isInjection() {
    for (const b of this.range) {
      let count = 0;
      for (const a of this.domain) {
        if (this.r.test(a, b)) {
          count++;
          if (count > 1) {
            return false;
          }
        }
      }
    }
    return true;
  }

  isSurjection() {
    for (const b of this.range) {
      let count = 0;
      for (const a of this.domain) {
        if (this.r.test(a, b)) {
          count++;
          break;
        }
      }
      if (count === 0) {
        return false;
      }
    }
    return true;
  }

  isBijection() {
    return this.isInjection() && this.isSurjection();
  }

  getInverse(): Mapping<U, T> {
    if (!this.isInjection()) {
      throw new Error(
        'Cannot get the inverse because this mapping is not an injection'
      );
    }
    return new Mapping<U, T>(
      new Relation<U, T>((u, t) => this.r.spec(t, u)),
      this.range,
      this.domain
    );
  }
}
