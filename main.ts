import term = require("terminal-kit");
term = term.terminal();
import SLL = require("./linkedList/LinkedList");


var lista = new SLL.LinkedList.SimpleList<number>();
lista.append(10).append(20).append(30);

var iterador = lista.getIterator();

term.red(lista.getHead().getValue()+"\n");
lista.remove(iterador);
term.green(lista.getHead().getValue());



// for (iterador.start(); iterador.isValid(); iterador.forth()){
// 	term.green(iterador.getItem());
// 	term.
// }


