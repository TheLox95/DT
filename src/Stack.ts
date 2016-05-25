export class Stack<T>{
	private _top: number;
	private _array: Array<T>;

	constructor(){
		this._top = 0;
		this._array = [];
	}

	public push(value:T):this{
		this._array[this._top] = value;
		this._top++;
		return this;
	}

	public pop():this{
		if(this.isEmpty() === false) {
			this._top--;
		}

		return this;
	}

	public peek():T{
		return this._array[this._top -1];
	}

	public getCount(){
		return this._top;
	}

	private isEmpty():Boolean{
		if(this._top == 0) {
			return true;
		}

		return false;
	}

}