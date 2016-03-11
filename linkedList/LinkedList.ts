export module LinkedList{

	export class SimpleList<T>{
		private _data: T;
		private _next: SimpleList<T>;

		public insertAfter(value:T){
			var newNode: SimpleList<T> = new SimpleList<T>();
			newNode._data = value;
			newNode._next = this._next;
			this._next = newNode;
		}

		public setValue(value:T): this{
			this._data = value;
			return this;
		}

		public getValue(): T{
			return this._data;
		}
	}

}