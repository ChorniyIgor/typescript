"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
        this.length = 0;
    }
    add(data) {
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
    at(position) {
        if (!this.head)
            throw new Error("Empty List");
        let index = 0;
        let tail = this.head;
        while (tail) {
            if (index === position) {
                return tail;
            }
            tail = tail.next;
            index++;
        }
        throw new Error(`There is no items with ${position} index`);
    }
    compare(firstId, secondId) {
        return this.at(firstId).data > this.at(secondId).data;
    }
    swap(firstId, secondId) {
        const leftHand = this.at(firstId).data;
        this.at(firstId).data = this.at(secondId).data;
        this.at(secondId).data = leftHand;
    }
    print() {
        if (!this.head) {
            console.log("empty");
            return;
        }
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
