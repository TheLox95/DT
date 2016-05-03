export type ComparerFunction<T> = (value1:T,value2:T) => boolean;
export type TraversalFunction<T> = (value : T) => void;

export class BinaryTree<ValueT>{

	private _value: ValueT;
	private _parent: BinaryTree<ValueT>;
	private _left: BinaryTree<ValueT>;
	private _right: BinaryTree<ValueT>;
	private _traversalFunction: TraversalFunction<ValueT>;

	private _comparer: ComparerFunction<ValueT>;

	constructor(){
		this._parent = null;
		this._left = null;
		this._right = null;
	}


	public setValue(value: ValueT): this {
		this._value = value;
		return this;
	}

	public getValue(): ValueT {
		return this._value;
	}

	public setParent(tree: BinaryTree<ValueT>): this {
		this._parent = tree;
		return this;
	}

	public getParent(): BinaryTree<ValueT> {
		return this._parent;
	}

	public setLeft(tree: BinaryTree<ValueT>): this {
		this._left = tree;
		this._left.setParent(this);
		return this;
	}

	public getLeft(): BinaryTree<ValueT> {
		return this._left;
	}

	public setRight(tree: BinaryTree<ValueT>): this {
		this._right = tree;
		this._right.setParent(this);
		return this;
	}

	public getRight(): BinaryTree<ValueT> {
		return this._right;
	}

	public setComparer(func: ComparerFunction<ValueT>) {
		this._comparer = func;

		if (this._left != null) {
			this._left.setComparer(func);
		}

		if (this._right != null) {
			this._right.setComparer(func);
		}
	}

	public getComparer(){
		return this._comparer;
	}

	public setTraversalFunction(func: TraversalFunction<ValueT>){
		this._traversalFunction = func;
		if(this._left) {
			this._left.setTraversalFunction(func);
		}

		if(this._right) {
			this._left.setTraversalFunction(func);
		}
	}

	public getTraversalFunction(){
		return this._traversalFunction
	}


	public getRoot(): BinaryTree<ValueT> {
		let tree: BinaryTree<ValueT> = this;
		while (tree._parent != null) {
			tree = tree._parent;
		}
		return tree;
	}

	public isRoot():boolean{
		return this._parent != null;
	}

	public isFull():boolean{
		return this._left != null && this._right != null;
	}



	//TODO : Comparer deberia ser una interfaz?
	public insert(data: ValueT, comparer?:ComparerFunction<ValueT>):this {
		if (comparer) {
			this.setComparer(comparer);
		}

		let current = this.getRoot();

		if (current.getValue() === null) {
			current.setValue(data);
			return;
		}

		let tempNode = new BinaryTree<ValueT>().setValue(data);

		while (current != null) {
			let parent = current;

			let result = this._comparer(data, current.getValue());

			if (result == true) {
				current = current.getLeft();

				if (current === null) {
					parent.setLeft(tempNode);
					break;
				}
			} else {
				current = current.getRight();

				if (current === null) {
					parent.setRight(tempNode);
					break;
				}
			}
		}

		return this;
	}

	public search(value: ValueT, comparer?:ComparerFunction<ValueT>): BinaryTree<ValueT> {
		if (comparer) {
			this.setComparer(comparer);
		}

		let current = this.getRoot();

		if (current.getValue() == value) {
			return current;
		}


		let tempNode = new BinaryTree<ValueT>().setValue(value);

		while (current.getValue() != value) {
			let result = this._comparer(value, current.getValue());

			if (result == true) {
				current = current.getLeft();

			} else {
				current = current.getRight();
			}

			if(current == null) {
				return null
			}
		}

		return current;
	}

	public preOrderTraversal(tree:BinaryTree<ValueT>,func?:TraversalFunction<ValueT>):void{
		if(func) {
			this.setTraversalFunction(func);
		}

		if(tree == null) {
			return;
		}

		this._traversalFunction(tree._value);
		this.preOrderTraversal(tree._left);
		this.preOrderTraversal(tree._right);
	}

	public inOrderTraversal(tree: BinaryTree<ValueT>, func?: TraversalFunction<ValueT>): void {
		if (func) {
			this.setTraversalFunction(func);
		}

		if (tree == null) {
			return;
		}

		this.inOrderTraversal(tree._left);
		this._traversalFunction(tree._value);
		this.inOrderTraversal(tree._right);
	}

	public postOrderTraversal(tree: BinaryTree<ValueT>, func?: TraversalFunction<ValueT>): void {
		if (func) {
			this.setTraversalFunction(func);
		}

		if (tree == null) {
			return;
		}

		this.postOrderTraversal(tree._left);
		this.postOrderTraversal(tree._right);
		this._traversalFunction(tree._value);
	}

	public getCount():number{
		let count: number = 1;

		if(this._left != null){
			count += this._left.getCount();
		}

		if(this._right != null){
			count += this._right.getCount();
		}

		return count;
	}

}