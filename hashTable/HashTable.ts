import SLL = require("../linkedList/LinkedList");

type HashEntryType<T, Q> = HashEntry<T,Q>;
type hashFunction = (value) => number;

interface HashEntry<KeyT, ValueT> {
	key: KeyT;
	value: ValueT;
}

export class HashTable<KeyT,ValueT>{
	private _size;
	private _count;
	private _table: Array<SLL.LinkedList.SimpleList<HashEntryType<KeyT,ValueT>>>;
	private _hashFunction: hashFunction;

	constructor(func:hashFunction){
		this._hashFunction = func;
		this._count = 0;
		this._table = [];
	}

	public insert(key:KeyT, value:ValueT){
		var entry: HashEntryType<KeyT, ValueT> = {
			value : value,
			key : key
		};
		var index: number = this._hashFunction(key);
		console.log(index);
	}

}