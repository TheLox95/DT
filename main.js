"use strict";
var term = require("terminal-kit");
term = term.terminal();
var SLL = require("./linkedList/LinkedList");
var lista = new SLL.LinkedList.SimpleList();
lista.append(10).append(20).append(30);
var iterador = lista.getIterator();
for (iterador.start(); iterador.isValid(); iterador.forth()) {
    term.green(iterador.getItem());
}
