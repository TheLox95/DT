namespace LinkedList {

	class ListNode<T>{
		private _data: T;
		private _next: ListNode<T> = null;

		public insertAfter(value: T) {
			var newNode: ListNode<T> = new ListNode<T>();
			newNode._data = value;
			newNode._next = this._next;
			this._next = newNode;
		}

		public setValue(value: T): this {
			this._data = value;
			return this;
		}

		public getValue(): T {
			return this._data;
		}

		public getNext():ListNode<T>{
			return this._next;
		}
	}
	
}