/// <reference path="../spec/support/jasmine.d.ts" />
import * as t from  "../tree/BinaryTree";

describe("Binary Tree",()=>{

	let tree = new t.BinaryTree<number>().setValue(100);
	tree.setLeft(new t.BinaryTree<number>().setValue(20));
	tree.getLeft().setLeft(new t.BinaryTree<number>().setValue(10));


	it("should has 1 child",()=>{
		expect(tree.getRight() == null).toBeTruthy();
	});

	it("should has value of 100",()=>{
		expect(tree.getValue()).toBe(100);
	});


	it("should has a size of 5",()=>{
		tree.getLeft().setRight(new t.BinaryTree<number>().setValue(15));
		tree.getLeft().getLeft().setLeft(new t.BinaryTree<number>().setValue(12));
		expect(tree.getCount()).toBe(5);
	});

	it("should has value of 12",()=>{
		let value = tree.getRoot() //root - value : 100
				.getLeft() //left child - value : 20
				.getLeft() //left child - value : 10
				.getLeft() //left child - value : 12
				.getValue();

		expect(value).toBe(12);
	});

	it("should return node of value 10",()=>{
		let searchFun: t.SearchFunction<number> = (_tree, data)=>{
			_tree = _tree.getRoot();
			while(_tree.getValue() != data){
				if(_tree.getValue() > data) {
					_tree = _tree.getLeft();
				}else{
					_tree = _tree.getRight();
				}

				if(tree === null){
					return null;
				}
			}
			return _tree;
		}

		tree.setSearchFunction(searchFun);
		tree = tree.search(10);

		expect(tree.getValue()).toBe(10);
	});

	it("should insert value of 5 under node of value 10",()=>{
		let insertFun: t.ComparerFunction<number> = (num1, num2) => {
			if(num1 < num2) {
				return true;
			}
			return false;
		}

		tree.insert(5, insertFun);
		expect(tree.getLeft().getLeft().getValue()).toBe(5);
	});

	it("should insert 90,95,80,85,70,75",()=>{
		tree.insert(90)
			.insert(95)
			.insert(80)
			.insert(85)
			.insert(70)
			.insert(75);

		expect(tree.search(90).getValue()).toBe(90);
		expect(tree.search(95).getValue()).toBe(95);
		expect(tree.search(80).getValue()).toBe(80);
		expect(tree.search(85).getValue()).toBe(85);
		expect(tree.search(70).getValue()).toBe(70);
		expect(tree.search(75).getValue()).toBe(75);
	});
});

