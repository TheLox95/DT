import DLL = require("./DoubleLinkedList");

type TreeNode<V> = Tree<V>;
type TreeChildren<V> = DLL.DoubleLinkedList<TreeNode<V>>;

export class Tree<ValueT>{
	private _value: ValueT;
	private _parent: TreeNode<ValueT>;
	private _children: TreeChildren<ValueT>;

	constructor(value:ValueT){
		this._parent = null;
		this._value = value;
		this._children = new DLL.DoubleLinkedList<Tree<ValueT>>();
	}

	public getValue():ValueT{
		return this._value;
	}

	public getChildren(): TreeChildren<ValueT> {
		return this._children;
	}

	public setParent(parent:TreeNode<ValueT>){
		this._parent = parent;
	}

	public getParent(){
		return this._parent;
	}

	public getCount():number{
		let count: number = 1;
		let iterator = this._children.getIterator();

		for (iterator.start(); iterator.isValid();iterator.forth()){
			count += iterator.getItem().getCount();
		}

		return count;
	}

	public destroy():this{
		let iterator = this._children.getIterator();
		let node: TreeNode<ValueT>;

		iterator.start();

		while(iterator.isValid()){
			node = iterator.getItem();
			this._children.remove(iterator);
		}
		return this;
	}
}

export class TreeIterator<ValueT>{
	private _node: TreeNode<ValueT>;
	private _childIterator: DLL.DoubleListIterator<TreeNode<ValueT>>;

	constructor(node:TreeNode<ValueT> = null){
		this._node = node;
		this._resetIterator();
	}

	getCurrentTree(){
		return this._node;
	}

	setCurrentTree(tree:TreeNode<ValueT>){
		this._node = tree;
	}

	private _resetIterator():this{
		if(this._node != null){
			this._childIterator = this._node.getChildren().getIterator();
		}else{
			this._childIterator = null;
		}
		return this;
	}

	public goRoot():this{
		while(this._node.getParent() != null){
			this._node = this._node.getParent();
		}

		this._resetIterator();
		return this;
	}

	public goUp():this{
		if (this._node != null) {
			this._node = this._node.getParent();
		}

		this._resetIterator();
		return this;
	}

	public goDown():this{
		if(this._childIterator.isValid()){
			this._node = this._childIterator.getItem();
			this._resetIterator();
		}
		return this;
	}

	public childForth():this{
		this._childIterator.forth();
		return this;
	}

	public childBack(): this {
		this._childIterator.backward();
		return this;
	}

	public childStart(): this {
		this._childIterator.start();
		return this;
	}

	public childEnd(): this {
		while (this._childIterator.isValid()) {
			this._childIterator.forth();
		}
		return this;
	}

	public childIsValid():boolean{
		return this._childIterator.isValid();
	}



	public appendChild(child:TreeNode<ValueT>){
		child.setParent(this._node);
		this._childIterator.getList().append(child);
		this._resetIterator();
	}

	public prependChild(child: TreeNode<ValueT>):this {
		this._childIterator.getList().prepend(child);
		return this;
	}

	public insertChildBefore(child: TreeNode<ValueT>):this {
		this._childIterator.backward().getList().insert(this._childIterator,child);
		return this;
	}

	public insertChildAfter(child: TreeNode<ValueT>):this {
		this._childIterator.forth().getList().insert(this._childIterator,child);
		return this;
	}
}