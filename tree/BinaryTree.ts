export type SearchFunction<T> = (current: BinaryTree<T>, value: T)=>BinaryTree<T>;
export type ComparerFunction<T> = (value1:T,value2:T) => boolean;

export class BinaryTree<ValueT>{

	private _value: ValueT;
	private _parent: BinaryTree<ValueT>;
	private _left: BinaryTree<ValueT>;
	private _right: BinaryTree<ValueT>;

	private _searchFunction: SearchFunction<ValueT>;
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

	public setSearchFunction(func: SearchFunction<ValueT>) {
		this._searchFunction = func;

		if(this._left != null){
			this._left.setSearchFunction(func);
		}

		if (this._right != null) {
			this._right.setSearchFunction(func);
		}
	}

	public getSearchFunction() {
		return this._searchFunction;
	}

	public getRoot(): BinaryTree<ValueT> {
		let tree: BinaryTree<ValueT> = this;
		while (tree._parent != null) {
			tree = tree._parent;
		}
		return tree;
	}

	//●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬๑۩۩๑▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●

	public isRoot():boolean{
		return this._parent != null;
	}

	public isFull():boolean{
		return this._left != null && this._right != null;
	}
	//TODO : Comparer deberia ser una interfaz!
	public insert(data: ValueT, comparer?:ComparerFunction<ValueT>):this {
		if (comparer != null) {
			this._comparer = comparer;
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

	public search(value: ValueT, func?:SearchFunction<ValueT>): BinaryTree<ValueT> {
		if(func != null){
			this._searchFunction = func;
		}

		let result = this._searchFunction(this, value);
		return result == null ? null : result;
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