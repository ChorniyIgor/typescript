export interface Sortable {
  length: number;
  compare(firstId: number, secondId: number): boolean;
  swap(firstId: number, secondId: number): void;
}

export abstract class Sorter {
  abstract length: number;
  abstract compare(firstId: number, secondId: number): boolean;
  abstract swap(firstId: number, secondId: number): void;

  sort(): void {
    const length = this.length;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
