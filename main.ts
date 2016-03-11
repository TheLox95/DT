import term = require("terminal-kit");
term = term.terminal();

import SLL = require("./linkedList/LinkedList");


var lista = new SLL.LinkedList.SimpleList<number>();
lista.setValue(5);
lista.insertAfter(12);
term.green(lista.getValue());