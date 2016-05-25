/// <reference path="../spec/support/jasmine.d.ts" />
import {SimpleList,Iterator} from "../src/LinkedList";

describe("Linked List", () => {
	let list = new SimpleList<string>();
	let iterator: Iterator<string>;

	it("should append elements to the list", () => {
		expect(list.append("Iron Man")).toEqual(list);
		expect(list.append("War Machine")).toEqual(list);
		expect(list.append("Capitan America")).toEqual(list);
		expect(list.append("Winter Soldier")).toEqual(list);
		expect(list.append("Falcon")).toEqual(list);
	});

	it("should return the iterator of the list",()=>{
		iterator = list.getIterator();
		expect(iterator).toEqual(list.getIterator());
	});

	it("should go to the 2 nodes after of the list",()=>{
		iterator	.forth()
			.forth();

		expect(iterator.getItem()).toBe("Capitan America");
	});

	it("should go to the first node of the list",()=>{
		iterator.start();
		expect(iterator.getItem()).toBe("Iron Man");
	});

	it("should remove the head node and set the head node to the next node",()=>{
		list.removeHead();
		iterator = list.getIterator();
		expect(iterator.getItem()).toBe("War Machine");
	});


	it("should remove a node from the list and set nextNode to the next node",()=>{
		expect(list.remove(iterator)).toEqual(list);
		iterator = list.getIterator();
		expect(iterator.getItem()).toBe("Capitan America");
	});


	it("should remove the tail of the list and set last node to the previous node",()=>{
		list.removeTail();
		expect(list.getTail().getValue()).toBe("Winter Soldier");
	});

	it("should go to the value of the main node",()=>{
		expect(list.getIterator().getItem()).toBe("Capitan America");
	});
});