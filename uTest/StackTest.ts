/// <reference path="../spec/support/jasmine.d.ts" />
import {Stack} from "../stack/Stack";

describe("Stack",()=>{
	let stack = new Stack<string>();

	it("should push elements to the stack",()=>{
		expect(stack.push("Tesla")).toBe(stack);
		expect(stack.push("Newton")).toBe(stack);
		expect(stack.push("Turing")).toBe(stack);
		expect(stack.push("Einstein")).toBe(stack);
		expect(stack.push("Hawking")).toBe(stack);
	});

	it("should return the first element of the stack",()=>{
		expect(stack.peek()).toBe("Hawking");
	});

	it("should extract the first element of the list",()=>{
		stack.pop();
		expect(stack.peek()).toBe("Einstein");
	});

	it("should have 3 elements",()=>{
		expect(stack.getCount()).toBe(4);
	});
});