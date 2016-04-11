import ht = require("./hashTable/HashTable");

var table = new ht.HashTable<string, string>();
table.insert("lo","Yo en alta definicion");
table.insert("dd","Yo en 4K");

 try{
	console.log(table.find("lo"));
	console.log(table.find("dd"));
	console.log(table.find("ddaa"));
}catch(err){
	console.log(err);
}