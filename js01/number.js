const myNum=070;
console.log(myNum);
//56

//const myNum1=079;
//报错超出了范围

const myNum3=0x9A;
console.log(myNum3);
//16进制中的154

console.log(10.0);
// 10 会被当做10使用

console.log(3.125e4);
//31250 
console.log(4e-4);
//0.0004

console.log(5e726);
//Infinity
//0

console.log(isFinite(34));
//  判断一个数是否是有限大 true

console.log(5/0); 
// Infinity 
console.log(5/-0);
 // -Infinity 

console.log(0/0); 
// NaN 
console.log(-0/+0); 
// NaN 

console.log(NaN == NaN); 
// false
//NaN不等于包括NaN在内的任何数值


//不可以转换为数值的 就为true
console.log(isNaN('10'));
//false 10
console.log(isNaN('qqq'));
//true
console.log('true');
//false 1

console.log(Number(true));
//1
console.log(Number('1.5'));
//1.5
console.log(Number(''));
//0
console.log(Number(undefined));
//NaN
console.log(Number(null));
//0

/* const myValue={};
const res1=valueOf(myValue);
console.log(res1); */

let num1 = parseInt("1234blue");
console.log(num1);
// 1234 
let num2 = parseInt(""); 
console.log(num2);
// NaN 
let num3 = parseInt("0xA");
console.log(num3); 
// 10十六进制整数 
let num4 = parseInt(22.5);
console.log(num4); 
// 22 
let num5 = parseInt("70");
console.log(num5); 
// 70 十进制值 
let num6 = parseInt("0xf"); 
console.log(num6);
// 15十 六进制整数 
const num7 = parseInt("a1.3");
console.log(num7);
//NaN
const num8 = parseInt("12blue78");
console.log(num8);
//12

const num9 = parseInt("8A", "16");
console.log(num9);
//138 可以传两个参数 第二个参数写是多少进制的

const num10 = parseFloat('12.34.4');
console.log(num10);
//12.34
const num11 = parseFloat('0xA3');
console.log(num11);
//0  只解析10进制
const num12 = parseFloat('012103');
console.log(num12);
//12103 忽略第一个0
const num13 = parseFloat('123blue12');
console.log(num13);
//123

let secondTemplateLiteral = ` 
first line 
second line`; 
console.log(secondTemplateLiteral[0] === '\n');
