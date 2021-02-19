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
        }
      }
      if (count > 1) {
        return false;
      }
    }
    return true;
  }
}
