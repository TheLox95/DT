import ht = require("./hashTable/HashTable");

var table = new ht.HashTable<string, string>();
table.insert("yo","Yo en alta definicion");

 try{
	console.log(table.find("yo"));
}catch(err){
	console.log(err);
}