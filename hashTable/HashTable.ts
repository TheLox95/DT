import SLL = require("../linkedList/LinkedList");

type HashEntryType<T, Q> = HashEntry<T,Q>;
type hashFunction = (value) => number;

interface HashEntry<KeyT, ValueT> {
	key: KeyT;
	value: ValueT;
}

export class HashTable<KeyT,ValueT>{
	private _modulo = 19;
	private _count;
	private _table: Array<SLL.LinkedList.SimpleList<HashEntryType<KeyT,ValueT>>>;
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
		return this._hashFunction(key) % this._modulo;
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
			this._table[index] = new SLL.LinkedList.SimpleList <HashEntryType<KeyT,ValueT>>();
		}

		this._table[index].append(entry);
		this.increaceCount();

		return this;
	}

	private ifIndexDoNotExistThrowErr(index){
		if(this.existsIndex(index) == false) {
			throw "This hash does't exists.";
		}
	}

	public find(key:KeyT){
		var index = this.calculateHash(key);

		this.ifIndexDoNotExistThrowErr(index);

		let iterador = this._table[index].getIterator();

		while(iterador.isValid()){
			if(iterador.getItem().key == key) {
				return iterador.getItem().value;
			}
			iterador.forth();
		}

		throw "This element does't exist in the table.";
	}

	public remove(key: KeyT) {
		var index = this.calculateHash(key);

		this.ifIndexDoNotExistThrowErr(index);

		let iterador = this._table[index].getIterator();

		while (iterador.isValid()) {
			if (iterador.getItem().key == key) {
				this._table[index].remove(iterador);
			}
			iterador.forth();
		}

		this.decreaseCount();
	}

}