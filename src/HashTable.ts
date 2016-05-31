import {SimpleList} from "./LinkedList";


export type HashEntryType<T, Q> = HashEntry<T,Q>;
export type hashFunction = (value:string) => number;

export interface HashEntry<KeyT, ValueT> {
	key: KeyT;
	value: ValueT;
}

export class HashTable<KeyT,ValueT>{
	private _modulo = 19;
	private _count:number;
	private _table: Array<SimpleList<HashEntryType<KeyT,ValueT>>>;
	private _hashFunction: hashFunction;

	constructor(func: hashFunction = HashTable.getSumAllCharCode) {
		this._hashFunction = func;
		this._count = 0;
		this._table = [];
	}

	private static getSumAllCharCode(word:string){
		let lengthWord = word.length;
		let sum = 0;
		for (var i = 0; i < lengthWord; i++) {
			sum += word.charCodeAt(i);
		}

		return sum;
	}

	private calculateHash(key: KeyT) {
		return this._hashFunction(key.toString()) % this._modulo;
	}

	private existsIndex(index:number){
		if (this._table[index] == undefined) {
			return false;
		}
		return true;
	}

	private increaceCount(){
		this._count++;
	}

	private decreaseCount(){
		this._count--;
	}

	public insert(key:KeyT, value:ValueT):this{
		var entry: HashEntryType<KeyT, ValueT> = {
			value : value,
			key : key
		};

		var index = this.calculateHash(key);

		if (this.existsIndex(index) == false) {
			this._table[index] = new SimpleList <HashEntryType<KeyT,ValueT>>();
		}

		this._table[index].append(entry);
		this.increaceCount();

		return this;
	}

	public find(key:KeyT): ValueT{
		let index = this.calculateHash(key);

		if(this.existsIndex(index) == false){
			return null;
		}

		let iterador = this._table[index].getIterator();

		while(iterador.isValid()){
			if(iterador.getItem().key == key) {
				return iterador.getItem().value;
			}
			iterador.forth();
		}

		return null;
	}

	public remove(key: KeyT): this {
		var index = this.calculateHash(key);

		if (this.existsIndex(index) == false) {
			return null;
		}

		let iterador = this._table[index].getIterator();

		while (iterador.isValid()) {
			if (iterador.getItem().key == key) {
				this._table[index].remove(iterador);
				return this;
			}
			iterador.forth();
		}

		this.decreaseCount();

		return null;
	}

}