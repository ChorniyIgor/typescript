"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strings = void 0;
const Sorter_1 = require("./Sorter");
class Strings extends Sorter_1.Sorter {
    constructor(collection) {
        super();
        this.collection = collection;
        this.length = collection.length;
    }
    compare(firstId, secondId) {
        return (this.collection[firstId].toLowerCase() >
            this.collection[secondId].toLowerCase());
    }
    swap(firstId, secondId) {
        const collectionArray = this.collection.split("");
        const leftHand = collectionArray[firstId];
        collectionArray[firstId] = collectionArray[secondId];
        collectionArray[secondId] = leftHand;
        this.collection = collectionArray.join("");
    }
}
exports.Strings = Strings;
