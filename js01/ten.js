//两种基本函数申明
function fu1(num1, num2) {
    return num1 + num2;
}
console.log(fu1(12,13));
let fu11 = function (num1, num2) {
    return num1 + num2;
};

//箭头函数
let sum = (num1, num2) => {
    kk= num1 + num2;
};sum(1, 2)
console.log(kk);
//3


let ints = [1, 2, 3];
console.log(ints.map(i => { return i + 1 }));
//[ 2, 3, 4 ]\

//如果只有一个参数可以不加括号
let res1 = x => { };

//函数名是指向函数的指针，一个函数可以有多个名称
function sum0(num1, num2) {
    return num1 + num2;
}

console.log(sum0(10, 10)); // 20 

let anotherSum = sum0;
console.log(anotherSum(10, 10)); // 20 

sum0 = null;
console.log(anotherSum(10, 10)); // 20 

//所有函数对象都会暴露一个name 属性，
//里面是字符串化的函数名 用 Function 构造函数创建的，则会标识成"anonymous"：
function foo() { }
let bar = function () { };
let baz = () => { };
console.log(foo.name); // foo 
console.log(bar.name); // bar 
console.log(baz.name); // baz 
console.log((() => { }).name); //（空字符串）
console.log((new Function()).name); // anonymous 

//arguments对象用来访问传进来的参数 第一个参数就是arguments[0],第二个就是arguments[1]
//不能用在箭头函数
function fu111(num1, num2) {
    return arguments[0] + arguments[1];
}
console.log(fu111(1, 2));
//3   调入的参数很多如何能一次传进去
function fu11q() {

    if (arguments.length == 1) {
        return arguments[0];
    }
    else if (arguments.length == 0) {
        return 'null';
    }


    else {

        let sum = 0;
        for (let i = 0; i < arguments.length; ++i) {
            sum += arguments[i];
        }
        return sum;
    }

}

console.log(fu11q(1, 2, 3, 4));//10
console.log(fu11q());//null


//arguments用法   命名参数是什么  arguments 对象可以跟命名参数一起使用
function doAdd(num1n, num2n) {

    if (arguments.length === 1) {

        console.log(num1n + 10);
    } else if (arguments.length === 2) {

        console.log(arguments[0] + num2n);
    }

}
doAdd(3, 4);
//7

//可以放在function函数中 让箭头函数使用
function fun001() {
    let bar = () => {
        console.log(arguments[0]);
    };
    bar();
}
fun001(5);
//5

//定义了两个同名函数，则后定义的会覆盖先定义的
function addSomeNumber(num) {
    return num + 100;
}

function addSomeNumber(num, num1) {
    return num + 200;
}

let resultmm = addSomeNumber(100);
console.log(resultmm);
// 300 

//默认参数
function moren(name = 'jake') {
    console.log(name);
}
moren();
moren('kuke');
//jake
//kuke
moren(undefined);
//jake   给参数传入undefined  相当于每传


//默认参数还可以是调用函数
let romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI'];
let ordinality = 0;
function getNumerals() {
    // 每次调用后递增 
    return romanNumerals[ordinality++];
}
function makeKing(name = 'Henry', numerals = getNumerals()) {
    return `King ${name} ${numerals}`;
}
console.log(makeKing());
// 'King Henry I' 

//默认参数是按顺序初始化的，所以后面的参数可以引用前边的
function makeKing1(name = 'Henry', numerals = name) {
    return `King ${name} ${numerals}`;
}

console.log(makeKing1());
// King Henry Henry

//分别传入数组中 的元素
let values = [1, 2, 3, 4];

function getSum() {
    console.log(arguments);
    let sum = 0;
    for (let i = 0; i < arguments.length; ++i) {
        sum += arguments[i];

    }

    return sum;
}
console.log(getSum.apply(null, values));//apply的第一个参数
console.log(getSum(...values));//扩展操作符

//10 10
//也可以使用默认参数
function getProduct(a, b, c = 1) {
    return a * b * c;
}
console.log(getProduct(...[1, 2]));
//2

//reduce会遍历数组元素，将每个元素都作为参数，
//代入自定义函数执行并返回一个返回值。并在下一次执行时将返回值作为参数传入。
//为什么一定要传入数组 因为reduce是数组的方法
function getSum1(...values){
    return values.reduce((x,y)=>x+y)
}
console.log(getSum(1,2,3));//6
//用...values 被赋值的一方，或者放在形参上，为 rest 运算符
//把逗号隔开的值序列组合成一个数组。

//函数声明会提升到源代码最前端 而函数表达式只是会在该他执行时执行
// 没问题 
console.log(sum77(10, 10));
function sum77(num1, num2) {
    return num1 + num2;
}

// 会出错 
/* console.log(sum76(10, 10)); 

let sum76 = function(num1, num2) { 

 return num1 + num2; 

}; */
//偶合是指两个或两个以上的有关系
//递归调用 递归调用就是在当前的函数中调用当前的函数并传给相应的参数,
//arguments.callee 指向 arguments 对象所在函数的指针
function factorial1  (num) {
    if (num <= 1) {
        return 1;
    } else {
        return  num * factorial(num - 1);
    }
}
factorial1(3);

function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);

    }
}
factorial1(3);

//用法是callSomeFunction(某个函数名，传入这个函数的实参值)。
//函数作为值传入  用callSomeFunction 得提前申明
//为什么fn3不需要带括号 访问函数而不是调用函数，那就必须不带括号
function callSomeFunction (functionName,argsName){
            return functionName(argsName);
}
function fn3(num){
   return num+100;
}
let qu12 = callSomeFunction(fn3,10);
console.log(qu12);
//110

/* 
///?????   o.sayColor??
window.color = 'red'; 
let o = { 
 color: 'blue' 
}; 
 
function sayColor() { 
 console.log(this.color); 
} 
 
sayColor(); // 'red' 
 
o.sayColor = sayColor; 
o.sayColor(); // 'blue' */

//caller  调用当前函数的函数
function outer() { 
    inner(); 
   } 
    
   function inner() { 
    console.log(inner.caller); 
   } 
   outer();

   //new.target 
   function Person(){
        console.log(new.target);
   }
   Person();
   //undefined
   new Person();
   //[Function: Person]


   //函数的属性和方法
   //length  用来保存命名参数的个数
   function sayName(name) { 
    console.log(name); 
   }
   console.log(sayName.length);
   //1

   //apply   在构造函数中this 是否就是函数名??????
   function summm(num1, num2) { 
    return num1 + num2; 
   } 
    
   function callSum1(num1, num2) { 
    return summm.apply(this, arguments); // 传入 arguments 对象 
   }

   function callSum2(num1, num2) { 
    return summm.apply(this, [num1, num2]); // 传入数组 
   } 
    
   console.log(callSum1(10, 10)); // 20 
   console.log(callSum2(10, 10)); // 20 


   //通过 call()向函数传参时，必须将参数一个一个地列出来
       function callSum(num1,num2){
        return  summm.call(this,num1,num2);
       }
       console.log(callSum(30, 10));
       //40

