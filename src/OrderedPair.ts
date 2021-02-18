import {MemoCache as Memoizer} from './Memoizer';

export class OrderedPair<T, U> {
  first!: T;
  second!: U;
  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;

    return Memoizer.handle(this);
  }
}
