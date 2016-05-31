export declare class DoubleLinkedList<T> {
    private _head;
    private _tail;
    private _count;
    constructor();
    getHead(): ListNode<T>;
    getTail(): ListNode<T>;
    getCount(): number;
    append(value: T): this;
    prepend(value: T): this;
    removeHead(): this;
    removeTail(): this;
    getIterator(): DoubleListIterator<T>;
    insert(iterator: DoubleListIterator<T>, value: T): this;
    remove(iterator: DoubleListIterator<T>): this;
    traverse(func: (item: T) => T): void;
}
export declare class DoubleListIterator<T> {
    private _mainNode;
    private _list;
    constructor(list?: DoubleLinkedList<T>, node?: ListNode<T>);
    getList(): DoubleLinkedList<T>;
    getNode(): ListNode<T>;
    start(): this;
    forth(): this;
    backward(): this;
    getItem(): T;
    isValid(): boolean;
}
export declare class ListNode<T> {
    private _previous;
    private _data;
    private _next;
    insertAfter(value: T): void;
    setValue(value: T): this;
    getValue(): T;
    getNext(): ListNode<T>;
    setNext(value: ListNode<T>): this;
    getPrevious(): ListNode<T>;
    setPrevious(node: ListNode<T>): ListNode<T>;
}
