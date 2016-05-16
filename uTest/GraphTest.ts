/// <reference path="../spec/support/jasmine.d.ts"/>
import {Graph,Node} from "../graph/Graph";

describe("Graph",()=>{
	let graph = new Graph<number,number>();
	graph.addNode(5,0);
	graph.addNode(9,1)
	graph.addNode(5,2);
	graph.addArc(0,2,8);
	graph.addArc(0,1,2);
	graph.addArc(2, 1, 12);


	it("should be conected and have and arc with a weight of 8",()=>{
		expect(graph.findArc(0, 2).getWeight()).toBe(8);
	});

	it("should return the arc connecting both nodes",()=>{
		expect(graph.findArc(0, 1).getNode().getValue()).toBe(9);
	});


	it("should remove a arc",()=>{
		expect(graph.removeArc(0, 1)).toBe(graph);
		expect(graph.findNode(0).getArcListIterator().getList().getCount()).toBe(2);
	});


	it("should return false when not find the node",()=>{
		expect(graph.removeArc(0, 8)).toBeFalsy();
	})

	it("should remove the node",()=>{
		expect(graph.removeNode(2)).toBe(graph);
	});

	it("should return false when not find the node to remove",()=>{
		expect(graph.removeNode(12)).toBeNull();
	});

	it("should only have two nodes",()=>{
		expect(graph.getCount()).toBe(2);
	});

	it("should sum each number by itself",()=>{
		let sumFunc = (node:Node<number,number>)=>{
			node.setValue(node.getValue()+node.getValue());
		}
		graph.depthFirst(graph.findNode(0),sumFunc);

		expect(graph.findNode(0).getValue()).toBe(10);
		expect(graph.findNode(1).getValue()).toBe(18);
	});

	it("should divide each number by two",()=>{
		let divideFunc = (node:Node<number,number>)=>{
			node.setValue(node.getValue()/2);
		}

		graph.addArc(0,1,20);
		graph.breadthFirst(graph.findNode(0),divideFunc);

		expect(graph.findNode(0).getValue()).toBe(5);
		expect(graph.findNode(1).getValue()).toBe(9);
	});
})