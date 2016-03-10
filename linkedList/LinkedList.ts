export module LinkedList{

	export class SimpleList<T>{
		private _data: T;
		private _next: List<T>;

		public insertAfter(value:T){
			var newNode: List<T> = new List<T>();
			newNode._data = value;
			newNode._next = this._next;
			this._next = newNode;
		}
	}

}