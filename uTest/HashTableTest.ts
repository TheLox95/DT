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

	it("should insert collited items",()=>{
		table2.insert(14, "Lantano Garuwashi");
		table2.insert(23,"Vi Sovari");
		table2.insert(32, "Logan Gyre");
		table2.insert(41, "Sa'kagé");

		expect(table2.find(14)).toBe("Lantano Garuwashi");
		expect(table2.find(23)).toBe("Vi Sovari");
		expect(table2.find(32)).toBe("Logan Gyre");
		expect(table2.find(41)).toBe("Sa'kagé");
	});

	it("should be null when element does not exist in the table",()=>{
		expect(table2.find(77)).toBeNull();
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
