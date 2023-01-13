//数组放数 删除数字 
let arr1 = [1,2,3];
arr1.pop();
console.log(arr1);
//12
arr1.push(3,4);
console.log(arr1);
//1234
arr1.pop();
arr1.unshift(4)
console.log(arr1);
//4123
arr1.shift();
console.log(arr1);
//123

let arr2 =[5,6];
arr1.push(...arr2);
console.log(arr1);
//12356




let newArr1=arr1.filter(function(item,i,arr1){
    return item>=2 
});
console.log(newArr1);
//[ 2, 3, 5, 6 ]
//arr1  过滤比2小的 fliter




//???
let arr34 = [1,2,3,4,5,6];
const res12 =arr34.map(function (item){
    return 6>item>1;
});
console.log(res12);
//arr1 返回234   数组的Map






let arr3 = [3,4,5];
var newArr = [];
for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr3.length; j++) {
      if (arr3[j] == arr1[i]){
        newArr.push(arr1[i]);
      }
    }
  }
  console.log(newArr);
//[ 3, 5 ]  //公共的数字 ARR1

//简单方法


//.join  队列和栈 数组
//栈的添加和删除都在末尾  队列一头删除 一头添加 join给数组添加分隔符
let num =arr3.join('?');
console.log(num);
//3?4?5




/* concat()方法可以在现有数组全部元素基础上
创建一个新数组。它首先会创建一个当前数组的副本，然后再把它的参数添加到副本末尾，最后返回这
个新构建的数组。 */
//sort()会在每一项上调用 String()转型函数，然后比较字符串来决定顺序
let colors = ["red", "green", "blue"]; 
let colors2 = colors.concat("yellow", ["black", "brown"]);
console.log(colors2); 
// ["red", "green", "blue", "yellow", "black", "brown"] 
//sort concat  




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
let res3=people.sort(function(obj1,obj2){
    return obj1.age-obj2.age;
})
console.log(res3);
//age 大小排序 sort  a-b是升序 b-a是降序
/* [
    { name: 'Nicolas', age: 2 },
    { name: 'Matt', age: 27 },
    { name: 'Nicholas', age: 29 }
  ] */


//weakmap 和map
 
  const wm25 = new WeakMap([ 
    [key1, "val1"], 
    ["BADKEY", "val2"], 
    [key3, "val3"] 
   ]);
   console.log(wm25); 

const wm25 = new WeakMap([ 
    [1, "val1"], 
    [2, "val2"], 
    [3, "val3"] 
   ]);
   console.log(wm25);
 //其区别


//浅复制  复制指针 不复制对象的内容

//深复制

//也可以在解构赋值时添加自定义属性
const { age, job = 'teacher' } = ress1;
console.log(job);
//teacher

let { constructor: c } = 4;
console.log(c);
let { length } = 'wing';
console.log(length);
// 4 

//构造函数  

