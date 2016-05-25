/// <reference path="../spec/support/jasmine.d.ts" />
import {Heap} from "../src/Heap";


describe("Heap",()=>{
	// TODO: Combertir el parametro de funcion del constructor de la clase Heap
	let heap = new Heap<number>((x:number,y:number):boolean=>{
		if(x < y){
			return true;
		}

		return false;
	});


	it("should enqueue 8 elements and return 32",()=>{
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

	it("should dequeue 3 elements and return 8",()=>{
		heap.dequeue()
			.dequeue()
			.dequeue();

		expect(heap.getItem()).toBe(8);
	});
});