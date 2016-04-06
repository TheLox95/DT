import ht = require("./hashTable/HashTable");

var table = new ht.HashTable<string, string>((value) => { return 1 });
table.insert("thelox95","leonardo");