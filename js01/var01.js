if (true) {
    let a = 'quan';
    var b = 'quan';
}
console.log(b);
console.log(a); 
//出现错误：let是块作用域 {}内有效。

let age;
let age;
//出现错误原因 不能在同一个块作用域中出现冗余声明 


var age1;
var age1;
//var可以申明相同的变量名。



var myName = 'quanzd';
console.log(myName);
//quanzd

if (true) {
    var myName = 'cat'
    console.log(myName);
    //cat
}

let myAge = 30;
console.log(myAge);//30
if (true) {
    let age = 26;
    console.log(age);//26
}



let dosum;
var dosum;
//不能申明相同的变量 


console.log(myName);//undefined 
var myName = 'dog';

console.log(myAge);
let myAge = 10;  //出错 

for (var i = 0; i < 5; i++) {
    console.log(i);
}//0 1 2 3 4
for (var i = 0; i < 5; i++) {

} console.log(i);// 5


for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0);
}
//5 5 5 5 5  settime指令是一会在执行，每执行一次生产一个语句console.log(i);最后产生的值再填进去


for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0);
}
//0 1 2 3 4 每执行一次就会产生一个新的i 与语句相匹配


function test() {
    let message = "hi";
}
test();
console.log(message);

