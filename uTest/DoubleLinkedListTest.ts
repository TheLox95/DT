///<reference path="../spec/support/jasmine.d.ts"/>
import {DoubleLinkedList} from "../src/DoubleLinkedList";

describe("Double Linked List", () => {

	let list = new DoubleLinkedList<string>();

	list.append("Ubuntu");

	it("should return the head of the list",()=>{
		expect(list.getHead().getValue()).toBe("Ubuntu");
	});

	it("should add a value after the head node",()=>{
		expect(list.append("Fedora")).toEqual(list);
		expect(list.getHead().getNext().getValue()).toBe("Fedora");
	});
	
	it("should add a value before the head node",()=>{
		list.prepend("ArchLinux");
		expect(list.getHead().getValue()).toBe("ArchLinux");
	});
	

	it("should return the tail of the list",()=>{
		expect(list.getTail().getValue()).toBe("Fedora");
	});

	it("should have 5 nodes",()=>{
		expect(list.getCount()).toBe(3);
	});
	

	it("should remove the head of the list",()=>{
		list.removeHead();
		expect(list.getHead().getValue()).toBe("Ubuntu");
	});

	it("should remove the tail of the list",()=>{
		list.removeTail();
		expect(list.getTail().getValue()).toBe("Ubuntu");
	});

	it("should return the iterator of the list",()=>{
		expect(list.getIterator().getList()).toEqual(list);
	});

	it("should insert the node after the main node of the iterator",()=>{
		let iterator = list.getIterator();
		list.insert(iterator, "Elementary");
		expect(iterator.getNode().getNext().getValue()).toBe("Elementary");
	});
	
	it("should remove the main node of the iterator",()=>{
		let iterator = list.getIterator();
		iterator.forth();
		list.remove(iterator);
	});

	it("should apply a function to all nodes of the list",()=>{
		// TODO: Comvbrtir el parametro de funcion del metodo traverse en un tipo
		list.traverse((text):string=>{
			return text.concat(" OS");
		});

		expect(list.getHead().getValue()).toBe("Ubuntu OS");
	});
});

describe("Double List Iterator",()=>{
	let list = new DoubleLinkedList<number>();
	list.append(5);
	list.append(7);
	list.append(24);
	list.append(44);
	list.append(11);
	list.append(86);

	let iterator = list.getIterator();

	it("should return the list",()=>{
		expect(iterator.getList()).toEqual(list);
	});
	
	it("should return the main node",()=>{
		expect(iterator.getNode()).toEqual(list.getHead());
	});

	it("should return the value of the main node",()=>{
		expect(iterator.getNode().getValue()).toBe(5);
	});

	it("should move 5 node after current node",()=>{
		iterator.forth()
			.forth()
			.forth()
			.forth()
			.forth();

		expect(iterator.getNode().getValue()).toBe(86);
	});

	it("should move 3 node before current node",()=>{
		iterator.backward()
			.backward()
			.backward();
		expect(iterator.getNode().getValue()).toBe(24);
	});


	it("should be valid node",()=>{
		expect(iterator.isValid()).toBeTruthy();
	});

	it("should set main node to the first node of the list",()=>{
		iterator.start();
		expect(iterator.getNode()).toEqual(list.getHead());
	});
	
});