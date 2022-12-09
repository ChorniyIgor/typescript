import { Sorter, Sortable } from "./Sorter";

export class Numbers extends Sorter implements Sortable {
  length: number;
  constructor(public collection: number[]) {
    super();
    this.length = collection.length;
  }

  compare(firstId: number, secondId: number): boolean {
    return this.collection[firstId] > this.collection[secondId];
  }

  swap(firstId: number, secondId: number): void {
    const leftHand = this.collection[firstId];
    this.collection[firstId] = this.collection[secondId];
    this.collection[secondId] = leftHand;
  }
}
