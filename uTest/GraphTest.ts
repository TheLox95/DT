/// <reference path="../spec/support/jasmine.d.ts"/>
import {Graph} from "../graph/Graph";

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


	it("should remove a node",()=>{
		expect(graph.removeArc(0, 1)).toBe(graph);
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

})