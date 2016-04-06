import queue = require("./queue/Queue");

var cola: queue.Queue<number> = new queue.Queue<number>();

cola.enqueue(10).enqueue(20).dequeue();

console.log(cola.peek());
