//通过var声明的所有全局变量和函数都会变成window对象的属性和方法
var age = 29;
var sayAge=()=>console.log(window.age);
sayAge();