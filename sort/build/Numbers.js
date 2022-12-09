"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Numbers = void 0;
const Sorter_1 = require("./Sorter");
class Numbers extends Sorter_1.Sorter {
    constructor(collection) {
        super();
        this.collection = collection;
        this.length = collection.length;
    }
    compare(firstId, secondId) {
        return this.collection[firstId] > this.collection[secondId];
    }
    swap(firstId, secondId) {
        const leftHand = this.collection[firstId];
        this.collection[firstId] = this.collection[secondId];
        this.collection[secondId] = leftHand;
    }
}
exports.Numbers = Numbers;
