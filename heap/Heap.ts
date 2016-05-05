import {ComparerFunction} from "../tree/BinaryTree"
export class Heap<ValueT> {
	private _count:number;
	private _comparer:ComparerFunction<ValueT>;
	private _arr:Array<ValueT>;
	
	constructor(func:ComparerFunction<ValueT>) {
		this._arr = [];
		this._comparer = func;
	}

	public getCount() : number {
		return this._count;
	}

	public getItem(){
		return this._arr[this._count];
	}

	public enqueue(value:ValueT):this{
		this._count++;
		this._arr[this._count] = value;
		this.walkUp(this._count);
		return this;
	}

	private _calcParentIndex(index:number) {
		return Math.round(index / 2) - 1;
	}

	public walkUp(index:number):this{
		let parentIndex = this._calcParentIndex(index);
		const childIndex = index;

		let temp = this._arr[childIndex];

		while(parentIndex > 0){
			if(this._comparer(temp, this._arr[parentIndex]) == false) {
				this._arr[childIndex] = this._arr[parentIndex];
				parentIndex = this._calcParentIndex(parentIndex);
			}else{
				break;
			}
		}

		this._arr[childIndex] = temp;
		return this;
	}

	public dequeue():this{
		if(this._count >= 1){
			this._arr[1] = this._arr[this._count];
			this.walkDown(1);
			this._count--;
		}

		return this;
	}

	private walkDown(index:number){
		let parentIndex = index;
		let childIndex = index * 2;
		let temp: ValueT = this._arr[parentIndex];

		while(childIndex < this._count){
			if(childIndex < (this._count - 1)){
				if(
					this._comparer(
						this._arr[childIndex],this._arr[(childIndex+1)]
						)
					) {
					childIndex++;
				}
			}

			if(this._comparer(temp, this._arr[childIndex]) == false){
				this._arr[parentIndex] = this._arr[childIndex];
				parentIndex = childIndex;
				childIndex *= 2;
			}else{
				break;
			}
			this._arr[parentIndex] = temp;
		}
	}
}