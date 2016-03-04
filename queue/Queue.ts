export class Queue<T>{

	private _count:number;
	private _queue: Array<T>;

	constructor(){
		this._count = 0;
		this._queue = [];
	}


	public enqueue(value:T){
		this._queue[this._count] = value;
		this._count++;
	}

	public dequeue(){
		this._count--;
	}

	public peek(){
		return this._queue[this._count - 1];
	}

	public getCount():number{
		return this._count;
	}
}