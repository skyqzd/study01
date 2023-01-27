let b = false; 
console.log(--b);
//console.log(b--);  //0
//console.log(b);
//console.log(b-1);  //-1

let s2 = "z"; 
console.log(s2++);//NaN

let res1 = "2b";
console.log(-res1);
//-2

let res2 = false;
console.log(-res2);
//0

let res3 = "aqf";
console.log(-res3);
//NaN
let res4 = 23;
console.log(~res4);
//-24
let result = 25 & 3; 
console.log(result); // 1 

let result1 = 25 | 3; 
console.log(result1); // 27

let result3 = 25 ^ 3; 
console.log(result3); // 26

let res5 = 3;
let res6 = res5 << 5;
console.log( res6);
//96

console.log(!"11");
console.log(!3);
console.log(!{});
/* false
false
false */


//逻辑与  假前真后
console.log('1' && true);
//true
console.log(false && {});
//false
console.log(true && {});
//{}
console.log(true && false);
//false

console.log(3 % Infinity);
//3
console.log(3 % 0);
//NaN

console.log(3 ** 2);
//9
console.log(9 ** 0.5);
//3
let result13 = ("55" == 55); // true，转换后相等 
console.log(result13);
let result23 = ("55" === 55); // false，不相等，因为数据类型不同
console.log(result23);

let result44 = "Brick".toLowerCase() < "alphabet".toLowerCase();
console.log(result44);
//false
let max = (3 > 4) ? 1 : 3; 
console.log(max);
//()为假 则得到后面的值

const num1=1,num2 =3;

let i = 0; 
do { 
 i += 2; 
} while (i > 10); 
console.log(i);
//2 先执行一次循环体再判断
// 成绩最高 成绩排序
let j = 0; 
while (j > 10) { 
 j += 2; 
} 
console.log(j);
//0 先判断条件再执行

   if (3) { 
    console.log("Value is true"); 
   } 

   var obj1 ={
    name: 'qzd',
    age : 11

   }
   for (const res100 in obj1){
    console.log(res100);
   }
   //nane
   //age



let num = 0;
outermost: 
for (let i = 0; i < 10; i++) { 
 for (let j = 0; j < 10; j++) { 
 if (i == 5 && j == 5) { 
 break outermost; 
 } 
 num++; 
 } 
} 
 
console.log(num); 
// 55

switch(1){
    case 1:
    console.log('优秀');
    break;
    case 2:console.log('不优秀');
    break;
}
//优秀

let secondTemplateLiteral = ` 
first line 
second line`; 
console.log(secondTemplateLiteral[0] === '\n'); 
// true 
//false
let myMultiLineTemplateLiteral = `
first line 
second line`; 
console.log(myMultiLineTemplateLiteral[0]=== '\n');

