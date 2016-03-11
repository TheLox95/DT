/// <reference path="ListNode.ts" />
export namespace LinkedList{

	export class SimpleList<T>{
		private _head: ListNode<T>;
		private _tail: ListNode<T>;
		private count: number;

		constructor() {
			this._head = null;
			this._tail = null;
			this.count = 0;
		}

		public append(value:T): this{
			if(this._head == null) {
				let node = new ListNode<T>;
				this._head = node;
				this._tail = node;

				this._head._setValue(value);
			}else{
				this._tail.insertAfter(value);
				this._tail = this._tail.getNext();
			}

			this.count++;

			return this;
		}

		public prepend(){}
	}


}