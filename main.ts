import term = require("terminal-kit");
term = term.terminal();
import SLL = require("./linkedList/DoubleLinkedList");


var lista = new SLL.LinkedList.DoubleLinkedList<number>();
lista.append(10).append(20).append(30);

term.red(lista.getHead().getValue()+"\n");
term.yellow(lista.getHead().getNext().getValue() + "\n");
term.green(lista.getTail().getValue()+"\n");
term(lista.getCount());
term("\n");

var iterador = lista.getIterator();
lista.remove(iterador);

term.red(lista.getHead().getValue() + "\n");
term.yellow(lista.getHead().getNext().getNext().getValue() + "\n");
term.green(lista.getTail().getValue() + "\n");

term(lista.getCount());



