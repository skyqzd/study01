const myAge = 23;
myAge = 30;
console.log(myAge);
//会出错的原因 修改了声明的变量；注意const声明必须赋值 

const myAge = 11;
myAge = 10;
//const 作用域也是块作用域  也不允许重复声明 



const res1 = {};
console.log(res1.name = 'kitty');
console.log(res1.name = 'yimi');
//  kitty  yimi 申明的是一个方法 修改他的属性没有问题 


for (const i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0);
} 
//会出错 不能用在迭代变量   因为每次循环值不一样 但是const不能改变变量的值










const myAge12 = {
    // name:2
}
//myAge12={name:1};
myAge12.name = 12;
console.log(myAge12);


