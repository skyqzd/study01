const obj1 = new Object();
const obj2 = obj1;
obj1.name = 'kuke';
console.log(obj2.name);
//kuke 


function addTen(num) {
    num += 10;
    return num;
}

let count = 20;
let result = addTen(count);
console.log(count);
// 20，没有变化 
console.log(result);
// 30



 function setName(obj) { 
    obj.name = "Nicholas"; 
   } 
    
   let person = new Object(); 
   setName(person); 
   console.log(person.name);
    // "Nicholas"  obj 指向的对象保存在全局作用域的堆内存上
 

function setName(obj) {
    obj.name = "Nicholas";
    obj = new Object();

    obj.name = "Greg";

}

let person = new Object();
setName(person);
console.log(person.name); // "Nicholas" 

console.log(person instanceof Object);
//true

const arr1 = [];
console.log(arr1 instanceof Array);
//true


function add(num1, num2) {
    sum = num1 + num2;
    return sum;
}

let result12 = add(10, 20);
console.log(result12);
console.log(sum);
// 把var去掉 变成了全局 就可以调用了



/* console.log(name1); // undefined 
var name1 = 'Jake'; */

function qzd() {
    console.log(name1); // undefined 
    var name1 = 'Jake';
}
qzd();

 if (true) { 
    let a; 
   } 
   console.log(a); 

 { 
 const d = 3; 
} 
console.log(d);//错误 */

const o3 = Object.freeze({});
o3.name = 'Jake';
console.log(o3.name);
// undefined 

let now = new Date();
let now1 = Date.parse("5/29/2019");
console.log(now1);
//1559059200000  返回该日期的毫秒数

let time1 = new Date();
let time2 = Date.UTC(2000, 1);
console.log(time2);
//949363200000  UTC(2005, 4, 5, 17, 55, 55) 表示 年月日 时分秒
let y2k = new Date(2000, 1, 14, 5, 12, 22);
console.log(y2k);
//  (2000, 1,4,2,12,22)  2000-02-03T18:12:22.000Z
//2000-02-13T21:12:22.000Z
let now12 = new Date();
let y3k = now12.toLocaleString();
console.log(y3k);
//2023/1/10 16:44:14  返回浏览器的时间

let now123 = new Date(2000, 1, 14, 5, 12, 22);
let y31k = now123.toLocaleDateString();
console.log(y31k);
let y21k = now123.toLocaleTimeString();
console.log(y31k);
//2000/2/14
console.log(y21k);
//05:12:22

let pattern1 = /\[bc\]at/i;

console.log(pattern1.global); // false 
console.log(pattern1.ignoreCase); // true 
console.log(pattern1.multiline); // false 
console.log(pattern1.lastIndex); // 0  在源字符串中下一次搜索的开始位置
console.log(pattern1.source); // "\[bc\]at"  正则表达式的字面量字符串
console.log(pattern1.flags); // "i"  正则表达式的标记字符


//捕获组 
/* （sun）（day）   由"sun"和"day"两个子表达式构成的两个分组
（其实这两个分组也是捕获组），
它的最终匹配效果和"/(sunday)/"是一样的，
只是分组之后可以把各组子表达的结果分别处理，让操作更加灵活。 */


let text = "mom and dad and baby";
let pattern = /mom( and dad( and baby)?)?/gi;

let matches = pattern.exec(text);
console.log(matches.index);
// 0      index 和input是exec()返回数组中的两个属性
console.log(matches.input);
// "mom and dad and baby"    input是要查找到字符串
console.log(matches[0]);
//"mom and dad and baby"  数组的第一个元素是匹配整个模式的字符串
console.log(matches[1]);
// " and dad and baby"   第一个捕获组
console.log(matches[2]);
// " and baby"   第二个捕获组


let text1 = "cat, bat, sat, fat";
let pattern2 = /.at/;

let matches3 = pattern2.exec(text1);
console.log(matches3.index); // 0 
console.log(matches3[0]); // cat 
console.log(pattern2.lastIndex); // 0  如果是/.at/g 有个去哪句模式则会接着上次继续匹配
let pattern3 = /.at/g;
let matches4 = pattern3.exec(text1);
console.log(matches4.index); // 0 
console.log(matches4[0]); // cat
console.log(pattern3.lastIndex); //3


//符号问题不懂
let textn = "000-00-0000";
let patternn = /\d{3}-\d{2}-\d{4}/;

if (patternn.test(textn)) {
    console.log("The patternn was matched.");
}



 let text21 = "this has been a short summer"; 
let pattern21 = /(.)hort/g; 
 
if (pattern21.test21()) { 
 console.log(RegExp.input);  
 console.log(RegExp.leftContext); 
 console.log(RegExp.rightContext); 
 console.log(RegExp.lastMatch);
 console.log(RegExp.lastParen); 
} 
 
let s1 = "some text";
let s2 = s1.substring(2);
console.log(s2);
//1 subString用来截取字符串  2原始值有方法原因 后台进行了操作 创建一个 String 类型的实例
//let s1 = new String("some text")

let obj = new Object("some text");
console.log(obj instanceof String);
// true 
//Object能够根据传入值的类型返回相应原始值包装类型的实例



let num = 10;
console.log(num.toFixed(2)); // 10.00  保留小数点后两位


let num1 = 10.005;
console.log(num1.toFixed(2)); // "10.01" 


let num2 = 10;
console.log(num2.toExponential(1)); // "1.0e+1" 科学计数法


let num3 = 99;
console.log(num3.toPrecision(1)); // "1e+2" 
console.log(num3.toPrecision(2)); // "99" 
console.log(num3.toPrecision(3)); // "99.0" 


let message = "abcde";
console.log(message.charCodeAt(2));
//99

console.log(String.fromCharCode(0x61, 0x62, 0x63, 0x64, 0x65));
//abcde





