/// <reference path="../spec/support/jasmine.d.ts" />
import {Heap} from "../heap/Heap";


describe("Heap",()=>{
	let heap = new Heap<number>((x,y)=>{
		if(x < y){
			return true;
		}

		return false;
	});


	it("should return 32",()=>{
		heap.enqueue(10)
			.enqueue(15)
			.enqueue(19)
			.enqueue(5)
			.enqueue(8)
			.enqueue(22)
			.enqueue(28)
			.enqueue(32)
			
		expect(heap.getItem()).toBe(32);
	});

	it("should return 8",()=>{
		heap.dequeue()
			.dequeue()
			.dequeue();

		expect(heap.getItem()).toBe(8);
	});
});