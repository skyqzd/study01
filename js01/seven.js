let collection = ['foo', 'bar', 'baz']; 
collection.forEach((item) => console.log(item)); 
//foo bar baz

let str = 'abc';
console.log(str[Symbol.iterator]);
//[Function: [Symbol.iterator]]
//数组解构就是能快速提取数组中的指定成员
//解构赋值都是一一对应的，按照顺序。
let [,,c] =  collection;
console.log(c);
//baz
let arr2 = [...collection]; 
console.log(arr2);
//[ 'foo', 'bar', 'baz' ]  扩展操作符


const arr1 = ['blue','red'];
const res2 = arr1.concat([1,2]);
console.log(res2);
//[ 'blue', 'red', 1, 2 ]
console.log(res2.slice(0,3));
//[ 'blue', 'red', 1 ] slice(0,3) 从0开始检索 到3-1结束
