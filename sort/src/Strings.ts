import { Sortable, Sorter } from "./Sorter";

export class Strings extends Sorter implements Sortable {
  length: number;
  constructor(public collection: string) {
    super();
    this.length = collection.length;
  }

  compare(firstId: number, secondId: number): boolean {
    return (
      this.collection[firstId].toLowerCase() >
      this.collection[secondId].toLowerCase()
    );
  }

  swap(firstId: number, secondId: number): void {
    const collectionArray = this.collection.split("");
    const leftHand = collectionArray[firstId];
    collectionArray[firstId] = collectionArray[secondId];
    collectionArray[secondId] = leftHand;
    this.collection = collectionArray.join("");
  }
}
