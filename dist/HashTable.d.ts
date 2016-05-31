export declare type HashEntryType<T, Q> = HashEntry<T, Q>;
export declare type hashFunction = (value: string) => number;
export interface HashEntry<KeyT, ValueT> {
    key: KeyT;
    value: ValueT;
}
export declare class HashTable<KeyT, ValueT> {
    private _modulo;
    private _count;
    private _table;
    private _hashFunction;
    constructor(func?: hashFunction);
    private static getSumAllCharCode(word);
    private calculateHash(key);
    private existsIndex(index);
    private increaceCount();
    private decreaseCount();
    insert(key: KeyT, value: ValueT): this;
    find(key: KeyT): ValueT;
    remove(key: KeyT): this;
}
