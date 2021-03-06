/// <reference path="./LinkedList.ts"/>
import * as list from "./LinkedList";
import  {Queue} from "./Queue";


export type Node<T,V> = GraphNode<T,V>;
export type Arc<T, V> = GraphArc<T,V>;

export class GraphArc<TypeNode, TypeArc> {

	private _node: GraphNode<TypeNode,TypeArc>;
	private _weight: TypeArc;

	public getNode(){
		return this._node;
	}

	public setNode(node:GraphNode<TypeNode,TypeArc>){
		this._node = node;		
	}

	public getWeight():TypeArc{
		return this._weight;
	}

	public setWeight(weight:TypeArc){
		this._weight = weight;
	}
}


export class GraphNode<NodeType, ArcType> {
	
	private _value:NodeType;
	private _arcList: list.SimpleList<Arc<NodeType,ArcType>>;
	private _isMarked:boolean;

	constructor(){
		this._arcList = new list.SimpleList<Arc<NodeType,ArcType>>();
	}

	public setValue(value:NodeType): this{
		this._value = value;
		return this;
	}

	public getValue():NodeType{
		return this._value;
	}

	public setIsMarked(marked:boolean):this{
		this._isMarked = marked;
		return this;
	}

	public getIsMarked():boolean{
		return this._isMarked;
	}

	public getArcListIterator():list.Iterator<GraphArc<NodeType,ArcType>>{
		return this._arcList.getIterator();
	}

	public addArc(node:Node<NodeType, ArcType>,weight:ArcType):this{
		let arc = new GraphArc<NodeType,ArcType>() ;
		arc.setNode(node);
		arc.setWeight(weight);
		this._arcList.append(arc);
		return this;
	}

	public findArc(node:Node<NodeType,ArcType>):GraphArc<NodeType,ArcType>{
		let iterator :list.Iterator<Arc<NodeType,ArcType>>  = this._arcList.getIterator();	

		for (iterator.start(); iterator.isValid(); iterator.forth()) {
			if(iterator.getItem().getNode() == node) {
				return iterator.getItem();
			}
		}		
		return null;
	}

	public removeArc(node:Node<NodeType,ArcType>): boolean{
		let iterator :list.Iterator<Arc<NodeType,ArcType>>  = this._arcList.getIterator();	
		for (iterator.start(); iterator.isValid(); iterator.forth()) {
			if(iterator.getItem().getNode() == node) {
				this._arcList.remove(iterator);
				return true;
			}
		}		
		return null;
	}
}

export class Graph<NodeType, ArcType> {
	
	private _nodes: Array<Node<NodeType,ArcType>>;
	private _count:number;


	constructor(){
		this._nodes = [];
		this._count = 0;
	}

	public getCount():number{
		return this._count;
	}

	public addNode(data:NodeType,index:number):boolean{
		if(this._nodes[index] != null) {
			return false;
		}
		this._nodes[index] = new GraphNode<NodeType, ArcType>();
		this._nodes[index].setValue(data);
		this._nodes[index].setIsMarked(false);
		this._count++;
		return true;
	}

	public removeNode(index:number):this{
		if(this._nodes[index] == null){
			return null;
		}
		let nodeIndex: number;
		let arc: Arc<NodeType, ArcType>;
		let nodeLength = this._nodes.length
			
		for (nodeIndex = 0; nodeIndex < nodeLength ;nodeIndex++) {
			if(this._nodes[nodeIndex] != null) {
				arc = this._nodes[nodeIndex].findArc(this._nodes[nodeIndex]);
				if(arc != null){
					this.removeArc(nodeIndex, index);
				}
			}
		}
		this._nodes[index] = null;
		this._count--;
		return this;
	}


	public addArc(indexNodeFrom:number, indexNodeTo:number, weight:ArcType):boolean{
		if(this._nodes[indexNodeFrom] == null || this._nodes[indexNodeTo] == null) {
			return false;
		}

		if(this._nodes[indexNodeFrom].findArc(this._nodes[indexNodeTo]) != null){
			return false;
		}	
		this._nodes[indexNodeFrom].addArc(this._nodes[indexNodeTo],weight);
		return true;
	}	

	public removeArc(indexNodeFrom:number, indexNodeTo:number):boolean | this{
		if(this._nodes[indexNodeFrom] == null || this._nodes[indexNodeTo] == null){
			return false;
		}

		this._nodes[indexNodeFrom].removeArc(this._nodes[indexNodeTo]);
		return this;
	}

	public findNode(index:number){
		if( this._nodes[index] == null){
			return null;
		}
		return this._nodes[index];
	}


	public findArc(indexNodeFrom:number, indexNodeTo:number):Arc<NodeType,ArcType>{
		if(this._nodes[indexNodeFrom] == null || this._nodes[indexNodeTo] == null){
			return null;
		}

		return this._nodes[indexNodeFrom].findArc(this._nodes[indexNodeTo]);
	}

	private _clearMarks(){
		let index: number;
		let nodesLenght = this._nodes.length;

		for (index = 0; index < nodesLenght; index++){
			if(this._nodes[index] != null){
				this._nodes[index].setIsMarked(false);
			}
		}
	}

	public depthFirst(node:Node<NodeType,ArcType>, func:(node:Node<NodeType,ArcType>)=>void){
		if(node == null) {
			return;
		}
		this._clearMarks();
		func(node);
		node.setIsMarked(true);

		let iterator: list.Iterator<GraphArc<NodeType, ArcType>>;
		iterator = node.getArcListIterator();

		for (iterator.start(); iterator.isValid(); iterator.forth()) {
			if (iterator.getItem().getNode().getIsMarked() == false){
				this.depthFirst(iterator.getItem().getNode(), func);
			}
		}
	}
	
	public breadthFirst(node: Node<NodeType, ArcType>, func:(node:Node<NodeType,ArcType>)=>void){
		if(node == null){
			return;
		}
		this._clearMarks();

		let queue = new Queue<Node<NodeType, ArcType>>();
		let iterator: list.Iterator<Arc<NodeType,ArcType>>;

		queue.enqueue(node);
		node.setIsMarked(true);

		while(queue.getCount() != 0){
			func(queue.peek());
			iterator = queue.peek().getArcListIterator();
			for (iterator.start(); iterator.isValid(); iterator.forth()){
				if(iterator.getItem().getNode().getIsMarked() == false) {
					iterator.getItem().getNode().setIsMarked(true);
					queue.enqueue(iterator.getItem().getNode());
				}
			}
			queue.dequeue();
		}

	}
}
