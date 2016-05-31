/// <reference path="LinkedList.d.ts" />
import * as list from "./LinkedList";
export declare type Node<T, V> = GraphNode<T, V>;
export declare type Arc<T, V> = GraphArc<T, V>;
export declare class GraphArc<TypeNode, TypeArc> {
    private _node;
    private _weight;
    getNode(): GraphNode<TypeNode, TypeArc>;
    setNode(node: GraphNode<TypeNode, TypeArc>): void;
    getWeight(): TypeArc;
    setWeight(weight: TypeArc): void;
}
export declare class GraphNode<NodeType, ArcType> {
    private _value;
    private _arcList;
    private _isMarked;
    constructor();
    setValue(value: NodeType): this;
    getValue(): NodeType;
    setIsMarked(marked: boolean): this;
    getIsMarked(): boolean;
    getArcListIterator(): list.Iterator<GraphArc<NodeType, ArcType>>;
    addArc(node: Node<NodeType, ArcType>, weight: ArcType): this;
    findArc(node: Node<NodeType, ArcType>): GraphArc<NodeType, ArcType>;
    removeArc(node: Node<NodeType, ArcType>): boolean;
}
export declare class Graph<NodeType, ArcType> {
    private _nodes;
    private _count;
    constructor();
    getCount(): number;
    addNode(data: NodeType, index: number): boolean;
    removeNode(index: number): this;
    addArc(indexNodeFrom: number, indexNodeTo: number, weight: ArcType): boolean;
    removeArc(indexNodeFrom: number, indexNodeTo: number): boolean | this;
    findNode(index: number): GraphNode<NodeType, ArcType>;
    findArc(indexNodeFrom: number, indexNodeTo: number): Arc<NodeType, ArcType>;
    private _clearMarks();
    depthFirst(node: Node<NodeType, ArcType>, func: (node: Node<NodeType, ArcType>) => void): void;
    breadthFirst(node: Node<NodeType, ArcType>, func: (node: Node<NodeType, ArcType>) => void): void;
}
