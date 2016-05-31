export declare class Queue<T> {
    private _count;
    private _front;
    private _queue;
    constructor();
    peek(): T;
    enqueue(value: T): this;
    dequeue(): this | boolean;
    getCount(): number;
    private _isEmpty();
}
