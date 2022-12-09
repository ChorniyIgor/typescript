import { LinkedList } from "./LinkedList";
import { Numbers } from "./Numbers";
import { Strings } from "./Strings";

const numbers = new Numbers([-5, -13, 0, -100, 189]);
numbers.sort();
console.log(numbers.collection);

const string = new Strings("wtdefdasKdadddda");
string.sort();
console.log(string.collection);

const linkedList = new LinkedList();
linkedList.add(-51);
linkedList.add(-351);
linkedList.add(12);
linkedList.add(0);
linkedList.add(-43);
linkedList.add(710);

linkedList.sort();
linkedList.print();
