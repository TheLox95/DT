export module LinkedList{

	export class SimpleList<T>{
		private _head: ListNode<T>;
		private _tail: ListNode<T>;
		private _count: number;

		constructor() {
			this._head = null;
			this._tail = null;
			this._count = 0;
		}

		public getHead(){
			return this._head;
		}

		public getTail(){
			return this._tail;
		}

		public append(value:T): this{
			if(this._head == null) {
				let node = new ListNode<T>();
				this._head = node;
				this._tail = node;

				this._head.setValue(value);
			}else{
				this._tail.insertAfter(value);
				this._tail = this._tail.getNext();
			}

			this._count++;

			return this;
		}

		public prepend(value:T): this{
			let newNode= new ListNode<T>();
			newNode.setValue(value);
			newNode.setNext(this._head);

			this._head = newNode;

			if(this._tail == null){
				this._tail = this._head;
			}

			this._count++;

			return this;
		}

		public removeHead(): this{
			if(this._head != null){

				let newNode : ListNode<T> = null;

				newNode = this._head.getNext();
				this._head = null;
				this._head = newNode

				if(this._head == null){
					this._tail = null;
				}

				this._count--;
			}
			return this;
		}

		public removeTail(): this{
			let headNodePointer = this._head;

			if(this._head != null) {
				if(this._head == this._tail) {
					this._head = null;
					this._tail = null
				}else{
					while(headNodePointer.getNext() != this._tail){
						headNodePointer = headNodePointer.getNext();
					}

					this._tail = headNodePointer;
					headNodePointer.setNext(null);
				}

				this._count--;
			}

			return this;
		}

		public getIterator(): SimpleListIterator<T>{
			return new SimpleListIterator<T>(this, this._head);
		}

		public insert(iterator: SimpleListIterator<T>, value:T): this{
			if(iterator.getList() != this) {
				return;
			}

			if(iterator.getNode() != null) {
				iterator.getNode().insertAfter(value);

				if(iterator.getNode() == this._tail) {
					this._tail = iterator.getNode().getNext();
				}

				this._count++;
			}else{
				this.append(value);
			}
			return this;
		}

		public remove(iterator:SimpleListIterator<T>){
			var headNodePointer = this._head;

			if(iterator.getList() != this) {
				return;
			}

			if(iterator.getNode() == null) {
				return;
			}

			if(iterator.getNode() == this._head) {
				iterator.forth();
				this.removeHead();
			}else{
				while(headNodePointer.getNext() != iterator.getNode()){
					headNodePointer = headNodePointer.getNext();
				}

				iterator.forth();

				if(headNodePointer.getNext() == this._tail) {
					this._tail = headNodePointer;
				}

				headNodePointer.setNext(null);
				headNodePointer.setNext(iterator.getNode());
			}
		}
	}

	export class SimpleListIterator<T>{
		private _mainNode : ListNode<T>;
		private _list : SimpleList<T>;

		constructor(list: SimpleList<T> = null, node: ListNode<T> = null){
			this._mainNode = node;
			this._list = list;
		}

		getList(){
			return this._list;
		}

		getNode(){
			return this._mainNode;
		}

		start(): this{
			if(this._list != null){
				this._mainNode = this._list.getHead();
			}

			return this;
		}

		forth(): this{
			if(this._mainNode != null) {
				this._mainNode = this._mainNode.getNext();
			}
			return this;
		}

		getItem(): T{
			return this._mainNode.getValue();
		}

		isValid(): boolean{
			return (this._mainNode != null)
		}
	}

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

		public getNext(): ListNode<T> {
			return this._next;
		}

		public setNext(value: ListNode<T>): this{
			this._next = value;
			return this;
		}
	}
}