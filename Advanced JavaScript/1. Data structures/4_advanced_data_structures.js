/*
	SET
	- Collection of values that cannot have repeated values.
	- Useful for filtering other collections (Arrays, ArrayLists…).
	- Main methods: add(), has() and delete().
*/
const set = new Set([2, 3, 3, 2]); // => [2, 3]
set.has(2); // => true
set.has(1); // => false

set.add(2); // [2, 3]
set.add(1); // [2, 3, 1]

set.delete(2); // [3, 1]

const newSet = {};
const anotherSet = {};

set.add(newSet); // [2, 3, 1, {}]
set.add(newSet); // [2, 3, 1, {}]
set.add(anotherSet); // [2, 3, 1, {}, {}]

/*
	MAP
	- Collection of elements where each element is stored as a pair of key/value.
	- Main methods: get(), set() and delete().
*/
const map = new Map([["a", 1],["b", 4]]); // {a: 1, b: 4}

map.has("a"); // => false

map.set("c", 5); // {a: 1, b: 4, c: 5}
map.get("c"); // => 5 
map.has("c"); // => false

map.delete("a"); // {b: 4, c: 5}

const newMap = {};

map.set(newMap, 5); 
console.log(map);

/*
	LINKEDLISTS
	- Data structure where each member has a reference to the next member.
	- Its order is determined by the references between their members.
*/

class ListNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor(head = null) {
		this.head = head;
	}
	getFirst() {
		return this.head;
	}
	getLast() {
		let lastNode = this.head;
		if (lastNode) {
			while (lastNode.next) {
				lastNode = lastNode.next;
			}
		}
		return lastNode;
	}
	size() {
		let count = 0;
		let node = this.head;
		while (node) {
			count++;
			node = node.next
		}
		return count;
	}
	clear() {
		this.head = null;
	}
}

// First, we create the nodes.
let node1 = new ListNode(2);
let node2 = new ListNode(5);
// Then we link the nodes between them.
node1.next = node2;
// Finally, we insert only the root node, which stores the information of the rest of the nodes.
let linkedList = new LinkedList(node1);
console.log(linkedList);