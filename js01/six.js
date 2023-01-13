//1
const obj1 = new Object();
obj1.name = "nike";
obj1.age = 12;
obj1.sayNmee=function(){
    return this.name;
};
const obj12 =new Object();
   

//2
const obj2 = {
    name: "nike",
    age: 12,
};

console.log(obj1.name);  //nike
console.log(obj2["age"]); //12

//通过变量访问属性

let myName = "name";
console.log(obj2[myName]);
//nike  可以通过变量访问属性

obj1["first name"] = "kuke";


//数组
let colors = new Array();
let colors1 = new Array(4);
console.log(colors1.length);
//4
let arr = new Array('jake', 'blue', 'red');
console.log(arr);
//[ 'jake', 'blue', 'red' ]

//在使用 Array 构造函数时，也可以省略 new 操作符
let colors3 = Array(3); // 创建一个包含 3 个元素的数组 
let names = Array("Greg"); // 创建一个只包含一个元素，即字符串"Greg"的数组

let arr1 = ['blue', 'red'];

//拆分字符串
console.log(Array.from("nike"));
//['n',' i ','k',' e']

const m = new Map().set(1, 2).set(3, 4);
const s = new Set().add(1).add(2).add('nike');
console.log(Array.from(m));//[ [ 1, 2 ], [ 3, 4 ] ]
console.log(Array.from(s));//[ 1, 2, 'nike' ]

//潜复制                    0
const a1 = ['a', 'c', 'k'];
const a2 = Array.from(a1);
console.log(a2);
//[ 'a', 'c', 'k' ]


// arguments 对象可以被轻松地转换为数组 
function getArgsArray() {
    return Array.from(arguments);
}
console.log(getArgsArray(1, 2, 3, 4));
// [1, 2, 3, 4] 


// from()也能转换带有必要属性的自定义对象 
const arrayLikeObject = {
    0: "a",
    1: "b",
    2: 3,
    3: 4,
    length: 4
};
console.log(Array.from(arrayLikeObject));
//[ 'a', 'b', 3, 4 ]

const a11 = [1, 2, 3, 4];
const a21 = Array.from(a11, x => x ** 2);
const a3 = Array.from(a11, function (x) { return x ** this.exponent }, { exponent: 2 });
console.log(a21); // [1, 4, 9, 16] 
console.log(a3); // [1, 4, 9, 16] 

//Array.of()
console.log(Array.of(1, 2, 3, 4));
//[ 1, 2, 3, 4 ]
const a33 = ['', 1, ''];
console.log(a33.join('*'));
//*1*


/* const options = [,,,,,]; // 创建包含 5 个元素的数组 
console.log(options.length); // 5 
console.log(options); // [ <5 empty items> ]
for (const option of options) { 
    console.log(option === undefined); 
   }
   //true true true true true

   const a = Array.from([,,,]); // 使用 ES6 的 Array.from()创建的包含 3 个空位的数组 
for (const val of a) { 
 console.log(val === undefined); 
} 
//true  */

/* console.log(Array.of(...[,,,])); */
//undefined*3

const colors21 = ['red', 'blue', 'black'];
console.log(colors21[0]);
colors21[1] = "skyblue";
console.log(colors21);
//[ 'red', 'skyblue', 'black' ]
colors21.length = 2;
console.log(colors21);
//[ 'red', 'skyblue' ]
colors21.length = 4;
console.log(colors21);
//[ 'red', 'skyblue', <2 empty items> ]
console.log(colors21[2]);
//undefined
colors21[colors21.length] = 'orange';
console.log(colors21);
//[ 'red', 'skyblue', <2 empty items>, 'orange' ]

if (Array.isArray(colors21)) {
    console.log('ok');
}
//ok
const zeroes = [0, 0, 0, 0, 0];
// 用 7 填充索引大于等于 1 且小于 3 的元素 
zeroes.fill(7, 1, 3);
console.log(zeroes); // [0, 7, 7, 0, 0]; 
zeroes.fill(0); // 重置 
zeroes.fill(2, 3, 4);
console.log(zeroes);

zeroes.fill(3);
console.log(zeroes);
zeroes.fill(2, 1, 3);
console.log(zeroes);
//[ 3, 3, 3, 3, 3 ]
//[ 3, 2, 2, 3, 3 ]


//从索引0开始到2 复制到索引3开始的地方
const arr5 = [1, 2, 3, 4, 5];
const res1 = arr5.copyWithin(3);
console.log(res1);
//[ 1, 2, 3, 1, 2 ]
const arr6 = [1, 2, 3, 4, 5];
const res2 = arr6.copyWithin(3, 1, 2);
console.log(res2);
//[ 1, 2, 3, 2, 2 ]

const arr61 = [1, 2, 3, 4, 5];
const res21 = arr61.copyWithin(3, 0, 1);
console.log(res21);
//[ 1, 2, 3, 1, 5 ]


let colors8 = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组 

console.log(colors8.toString()); // toString 返回字符串 
console.log(colors8.valueOf()); // valueOf返回数组本身
console.log(colors8);
/* red,blue,green
[ 'red', 'blue', 'green' ]
[ 'red', 'blue', 'green' ] */

let colors77 = new Array(); // 创建一个数组 
let count = colors77.push("red", "green"); // 推入两项 
console.log(colors77);//[ 'red', 'green' ]
console.log(count); // 2 
let newC = colors77.pop();
console.log(newC);
//green
console.log(colors77);
//[ 'red' ]
colors77.push('black', 'yellow');
console.log(colors77);
//[ 'red', 'black', 'yellow' ]
colors77.shift();
console.log(colors77);
//[ 'black', 'yellow' ]
colors77.unshift(11, 22);
console.log(colors77);
//[ 11, 22, 'black', 'yellow' ]
colors77.reverse();
console.log(colors77);
//[ 'yellow', 'black', 22, 11 ]



function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}

const arr22 = [1, 4, 2, 6, 9];

arr22.sort(compare);
console.log(arr22);
//[ 1, 2, 4, 6, 9 ]

let arrn1 = arr22.concat(['q', 'z']);
console.log(arrn1);

let arrn11 = arr22.concat('n');
console.log(arrn11);
//[ 1, 2, 4, 6, 9, 'n' ]
const arrn221 = arrn11.slice(1, 3);
console.log(arrn221);
//[ 2, 4 ]


let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(numbers.indexOf(4));//从前往后 (4,3)要查找的元素和起始位置
console.log(numbers.lastIndexOf(4));//从后往前 
console.log(numbers.includes(4));//找到返回true



const people = [
    {
        name: "Matt",
        age: 27
    },
    {
        name: "Nicholas",
        age: 29
    },
    {
        name: "Nicolas",
        age: 2
    }
    
];

console.log(people.find((element, index, array) => element.age < 28));
// {name: "Matt", age: 27} 

console.log(people.findIndex((element, index, array) => element.age < 28));
//0

const buf = new ArrayBuffer(16);
const fullDataView = new DataView(buf);
// byteOffset=0 表示视图从缓冲起点开始 
// byteLength=8 限制视图为前 8 个字节 
//const firstHalfDataView = new DataView(buf, 0, 8); 

// byteOffset=8 表示视图从缓冲的第 9 个字节开始 
// byteLength 未指定，默认为剩余缓冲 
//const secondHalfDataView = new DataView(buf, 8); 
const buf1 = new ArrayBuffer(12);
//创建一个12字节的内存
const ints = new Int32Array(buf1);
//用这个定型数组 一个元素用4字节
console.log(ints.length);
//3 12/4=3
const ints2 = new Int32Array(6);
//创建一个长度为6的定型数组
console.log(ints2.buffer.byteLength);
//24

/* //const ints4 = new Int32Array(['blue','black','yellow']);
const ints4 = new Int32Array([1,2,3]);
console.log(ints4.length);
//3
console.log(ints4.buffer.byteLength);
//12
console.log(ints4[0]);
//1 */

const ints5 = new Int16Array(ints2);
console.log(ints5.length);
//6
console.log(ints5.buffer.byteLength);
//12
console.log(Int16Array.BYTES_PER_ELEMENT);
//2

const container = new Int16Array(8);
container.set(Int8Array.of(4, 3));
console.log(container);
/* Int16Array(8) [
    4, 3, 0, 0,
    0, 0, 0, 0
  ] */
container.set([5, 6, 7, 8], 1);
console.log(container);
/* Int16Array(8) [
    4, 5, 6, 7,
    8, 0, 0, 0
  ] */

const source = Int16Array.of(2, 4, 6, 8);
// 从索引 1 开始复制到索引 3 
const partialCopy = source.subarray(1, 3);
console.log(partialCopy); // [4, 6] 


//Map
//使用new关键字和map构造函数可以创建一个空映射
const m1 = new Map();
//也可以给MAP传可迭代的对象
const m2 = new Map([
    ['name01', 'pp'],
    [1, 'ok']

])
console.log(m2.size);
//2
const myMap1 = new Map([
    ['job', 'policeman'],
    ['fav', 'apple']
]);
console.log(myMap1.has('job'));
//true   用has可以查询
console.log(myMap1.get('job'));
//policeman 
myMap1.set(1, 'ok');
console.log(myMap1);
//Map(3) { 'job' => 'policeman', 'fav' => 'apple', 1 => 'ok' }
//myMap1.clear  删除所有键值对
myMap1.delete('job');
console.log(myMap1);
//Map(2) { 'fav' => 'apple', 1 => 'ok' } delete用来删除某个键

const myMap2 = new Map().set(1, 'ok').set(4, 'tt');
myMap2.set(2, 'pp').set(3, 'oo');
console.log(myMap2.size);
//4

const myMap3 = new Map();
const fun1 = function () { };
const sym1 = Symbol();
myMap3.set(fun1, 'ok').set(sym1, 'qq');
console.log(myMap3);
//Map(2) { [Function: fun1] => 'ok', Symbol() => 'qq' }
//r任何数据类型都可以作为键

//weakMap

const myWeak = new WeakMap();
//WeakMap的键必须是对象或者是继承对象 的值
const key1 = { id: 1 },
    key2 = { id: 2 },
    key3 = { id: 3 };
const em1 = new WeakMap([
    [key1, 1],
    [key2, 2],
    [key3, 3]
]);
console.log(em1.get(key1));
//1
console.log(em1);
//WeakMap { <items unknown> }  用get添加实例以后 不在调用 就自动消除键； 
const yuan = 'o';
const obj00 = new String(yuan);
const we = new WeakMap();
we.set(obj00,'ok');
console.log(we.get(obj00));
//ok  原始值不能用作键 必须包装成对象

//set
//用new和set 可以构造空集合
const se1 = new Set(['a','b','c']);
console.log(se1.size);
//3
se1.add("Matt") 
 .add("Frisbie");
 console.log(se1);
 //Set(5) { 'a', 'b', 'c', 'Matt', 'Frisbie' }
 console.log(se1.delete('a'));
//true  delete删除返回布尔值 有的就返回true
for(let val of se1.values()){
    console.log(val);
}
/* b
c
Matt
Frisbie */



 const s1 = new Set(); 
const functionVal = function() {}; 
const symbolVal = Symbol(); 
const objectVal = new Object();
s1.add(functionVal).add(symbolVal).add(objectVal);
console.log(s1);
//Set(3) { [Function: functionVal], Symbol(), {} }

const s3 = new Set(); 
 
const objVal = {}, 
 arrVal = []; 
 
s3.add(objVal); 
s3.add(arrVal); 
 
objVal.bar = "bar"; 
arrVal.push("bar");
console.log(s3.has(objVal));
console.log(s3);
/* true
Set(2) { { bar: 'bar' }, [ 'bar' ] } */

let arr01 = [1,2,3,4,5];
let arr02 =[1,...arr01];
console.log(arr02);
//[ 1, 1, 2, 3, 4, 5 ] 扩展操作

let map1 =new Map([[1,2],[3,4]]);
let map2 =new Map(map1);
console.log(map2);
//Map(2) { 1 => 2, 3 => 4 }

let arr90 = [{}];
let arr91 =[...arr90];
arr90[0].name87='ll';
console.log(arr90[0]);
//{ name87: 'll' }