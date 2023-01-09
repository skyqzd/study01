const path = require ('path');
const pathStr = path.join('/a','/b/c','../','/d','e');
console.log(pathStr); 
//\a\b\d\e  ../会把上级目录抵消


const myPa = path.join(__dirname,'../form.html')
console.log(myPa);

var fullName = path.basename(myPa);//(pathStr,'.html')
console.log(fullName);
//form.html

var myEx = path.extname('/a/b/c/index.html');
console.log(myEx);