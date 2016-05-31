import DLL = require("./DoubleLinkedList");
export declare type TreeNode<V> = Tree<V>;
export declare type TreeChildren<V> = DLL.DoubleLinkedList<TreeNode<V>>;
export declare class Tree<ValueT> {
    private _value;
    private _parent;
    private _children;
    constructor(value: ValueT);
    getValue(): ValueT;
    getChildren(): TreeChildren<ValueT>;
    setParent(parent: TreeNode<ValueT>): void;
    getParent(): Tree<ValueT>;
    getCount(): number;
    destroy(): this;
}
export declare class TreeIterator<ValueT> {
    private _node;
    private _childIterator;
    constructor(node?: TreeNode<ValueT>);
    getCurrentTree(): Tree<ValueT>;
    setCurrentTree(tree: TreeNode<ValueT>): void;
    private _resetIterator();
    goRoot(): this;
    goUp(): this;
    goDown(): this;
    childForth(): this;
    childBack(): this;
    childStart(): this;
    childEnd(): this;
    childIsValid(): boolean;
    appendChild(child: TreeNode<ValueT>): void;
    prependChild(child: TreeNode<ValueT>): this;
    insertChildBefore(child: TreeNode<ValueT>): this;
    insertChildAfter(child: TreeNode<ValueT>): this;
}
