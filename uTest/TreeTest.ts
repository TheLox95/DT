/// <reference path="../spec/support/jasmine.d.ts" />
import t = require("../tree/Tree");


describe("tree",()=>{
	let treeRoot = new t.Tree<number>(100);
	let tree = treeRoot;

	let iterator = new t.TreeIterator(tree);
	iterator.appendChild(new t.Tree(5));
	iterator.appendChild(new t.Tree(10));
	iterator.appendChild(new t.Tree(15));

	it("should have three children",()=> {
		expect(tree.getChildren().getCount()).toBe(3);
	});

	it("Should go down and have value of 5",()=>{
		iterator.goDown();
		tree = iterator.getCurrentTree();

		expect(tree.getValue()).toBe(5);
	});

	it("should go up and have value of 100", () => {
		iterator.setCurrentTree(tree);
		iterator.goUp();
		tree = iterator.getCurrentTree();

		expect(tree.getValue()).toBe(100);
	});

	it("should iterate over all the tree",()=>{
		iterator.setCurrentTree(tree);
		iterator.goDown();
		tree = iterator.getCurrentTree();
		expect(tree.getValue()).toBe(5);

		iterator.setCurrentTree(tree);
		iterator.goUp();
		iterator.childForth();
		iterator.goDown();
		tree = iterator.getCurrentTree();
		expect(tree.getValue()).toBe(10);

		iterator.setCurrentTree(tree);
		iterator.goUp();
		iterator.childForth();
		iterator.childForth();
		iterator.goDown();
		tree = iterator.getCurrentTree();
		expect(tree.getValue()).toBe(15);
	});

	it("should go at bottom",()=>{
		iterator.appendChild(new t.Tree<number>(1000));
		iterator.goDown();
		iterator.appendChild(new t.Tree<number>(2000));
		iterator.goDown();
		iterator.appendChild(new t.Tree<number>(10000));
		iterator.goDown();

		expect(iterator.getCurrentTree().getValue()).toBe(10000);
	});

	it("should go to the root",()=>{
		expect(iterator.goRoot().getCurrentTree()).toEqual(treeRoot);
	});

});