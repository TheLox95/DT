import { ComparerFunction } from "./BinaryTree";
export declare class Heap<ValueT> {
    private _count;
    private _comparer;
    private _arr;
    constructor(func: ComparerFunction<ValueT>);
    getCount(): number;
    getItem(): ValueT;
    enqueue(value: ValueT): this;
    private _calcParentIndex(index);
    walkUp(index: number): this;
    dequeue(): this;
    private walkDown(index);
}
