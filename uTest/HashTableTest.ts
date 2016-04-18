/// <reference path="../spec/support/jasmine.d.ts" />
import ht = require("../hashTable/HashTable");

describe("HashTable", () => {
	let table1 = new ht.HashTable<string, string>();
	table1.insert("master", "Durzo Blint");
	table1.insert("apprentice", "Kylar Stern");

	it("should be Durzo Blint", ()=>{
		expect(table1.find("master")).toBe("Durzo Blint");
	});

	it("should be Kylar Stern", () => {
		expect(table1.find("apprentice")).toBe("Kylar Stern");
	});

	it("should be null when call find method and hash does not exist", ()=>{
	    expect(table1.find("Mama K")).toBeNull();
	});

	it("should be null when call to remove method and hash does not exist",()=>{
		expect(table1.remove("Jarl ;(")).toBeNull();
	});


	let table2 = new ht.HashTable<number,string>();

	it("should be Azoth", () => {
		table2.insert(50, "Azoth");

		expect(table2.find(50)).toBe("Azoth");
	});

	it("should be null when there is a hash collition",()=>{
		expect(table2.find(14)).toBeNull();
	});

	it("should return null when call remove method and element does not exist",()=>{
		expect(table2.remove(99)).toBeNull();
	});

	it("should be null when call find method and hash does not exist", () => {
		expect(table2.find(1000)).toBeNull();
	});

	it("should return this when remove element succesfully",()=>{
		expect(table2.remove(50)).toEqual(table2);
	});
});
