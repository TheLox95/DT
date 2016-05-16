export class Queue<T>{

	private _count:number;
	private _front:number;
	private _queue: Array<T>;

	constructor(){
		this._count = 0;
		this._front = 0;
		this._queue = [];
	}

	public peek():T {
		return this._queue[this._front];
	}

	public enqueue(value:T):this{
		this._queue[this._count] = value;
		this._count++;

		return this;
	}

	public dequeue():this | boolean{
		if(this._isEmpty() == true) {
			return false;
		}
		this._front++;
		this._count--;
		return this;
	}

	public getCount():number{
		return this._count;
	}

	private _isEmpty():boolean{
		if(this._count == 0){
			return true;
		}
		return false;
	}
}