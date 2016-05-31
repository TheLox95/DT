export declare type Iterator<T> = SimpleListIterator<T>;
export declare class SimpleList<T> {
    private _head;
    private _tail;
    private _count;
    constructor();
    getHead(): ListNode<T>;
    getCount(): number;
    getTail(): ListNode<T>;
    append(value: T): this;
    prepend(value: T): this;
    removeHead(): this;
    removeTail(): this;
    getIterator(): Iterator<T>;
    insert(iterator: Iterator<T>, value: T): this;
    remove(iterator: Iterator<T>): this | boolean;
}
export declare class SimpleListIterator<T> {
    private _mainNode;
    private _list;
    constructor(list?: SimpleList<T>, node?: ListNode<T>);
    getList(): SimpleList<T>;
    getNode(): ListNode<T>;
    start(): this;
    forth(): this;
    getItem(): T;
    isValid(): boolean;
}
export declare class ListNode<T> {
    private _data;
    private _next;
    insertAfter(value: T): void;
    setValue(value: T): this;
    getValue(): T;
    getNext(): ListNode<T>;
    setNext(value: ListNode<T>): this;
}
