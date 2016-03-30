import s = require("./stack/Stack");

var pila = new s.Stack<number>();

pila.push(15).push(30).pop();
console.log(pila.peek());
