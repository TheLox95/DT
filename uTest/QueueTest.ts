/// <reference path="../spec/support/jasmine.d.ts" />
import {Queue} from "../queue/Queue";

describe("Queue",()=>{
	let queue = new Queue<string>();

	it("should add elements",()=>{
		expect(queue.enqueue("Google")).toEqual(queue);
		expect(queue.enqueue("Facebook")).toEqual(queue);
		expect(queue.enqueue("Youtube")).toEqual(queue);
		expect(queue.enqueue("Twiter")).toEqual(queue);
	});

	it("should return element at the beginning of the queue",()=>{
		expect(queue.peek()).toBe("Google");
	});

	it("should eliminate the firts element of the queue",()=>{
		queue.dequeue();
		expect(queue.peek()).toBe("Facebook");
	});
});