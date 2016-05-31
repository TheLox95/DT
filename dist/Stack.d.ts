export declare class Stack<T> {
    private _top;
    private _array;
    constructor();
    push(value: T): this;
    pop(): this;
    peek(): T;
    getCount(): number;
    private isEmpty();
}
