/// <reference path="../spec/support/jasmine.d.ts" />
import * as t from  "../tree/BinaryTree";

describe("Binary Tree",()=>{

	let tree = new t.BinaryTree<number>().setValue(100);
	tree.setRight(new t.BinaryTree<number>().setValue(20));
	tree.setLeft(new t.BinaryTree<number>().setValue(10));


	it("should has 2 children",()=>{
		expect(tree.getCount() - 1).toBe(2);
	});

	it("should has value of 100",()=>{
		expect(tree.getValue()).toBe(100);
	});

	it("should has a size of 5",()=>{
		tree.getRight().setRight(new t.BinaryTree<number>().setValue(15));
		tree.getRight().setLeft(new t.BinaryTree<number>().setValue(12));
		expect(tree.getCount()).toBe(5);
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
		expect(tree.getLeft().getValue()).toBe(5);
	});

	it("should insert 90,95,80,85,70,75",()=>{
		tree.insert(90)
			.insert(95)
			.insert(80)
			.insert(85)
			.insert(70)
			.insert(75);

		expect(tree.getRoot().getRight().getValue()).toBe(90);
		expect(tree.getRoot().getRight().getRight().getValue()).toBe(95);
	});
});

