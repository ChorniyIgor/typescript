import { Sortable, Sorter } from "./Sorter";

class ListNode {
  next: ListNode | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter implements Sortable {
  head: ListNode | null = null;
  length: number = 0;

  add(data: number): void {
    const newItem = new ListNode(data);
    this.length++;

    if (!this.head) {
      this.head = newItem;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = newItem;
  }

  at(position: number): ListNode {
    if (!this.head) throw new Error("Empty List");

    let index = 0;
    let tail: ListNode | null = this.head;
    while (tail) {
      if (index === position) {
        return tail;
      }

      tail = tail.next;
      index++;
    }

    throw new Error(`There is no items with ${position} index`);
  }

  compare(firstId: number, secondId: number): boolean {
    return this.at(firstId).data > this.at(secondId).data;
  }

  swap(firstId: number, secondId: number): void {
    const leftHand = this.at(firstId).data;
    this.at(firstId).data = this.at(secondId).data;
    this.at(secondId).data = leftHand;
  }

  print(): void {
    if (!this.head) {
      console.log("empty");
      return;
    }

    let node: ListNode | null = this.head;

    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
