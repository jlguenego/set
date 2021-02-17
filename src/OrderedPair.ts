import {MemoCache as Memoizer} from './Memoizer';

export class OrderedPair {
  first!: string;
  second!: number;
  constructor(first: string, second: number) {
    this.first = first;
    this.second = second;

    return Memoizer.handle(this);
  }
}
