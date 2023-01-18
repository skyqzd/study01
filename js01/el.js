//期约  实现异步编程
//期约的状态 待定 兑现 拒绝
//执行器函数的作用:初始化期约的异步操作和控制状态的最终转换
//控制期约的状态转换 通过resolve 和reject  调用resolve会把状态切换为兑现
//调用reject会把状态切换为拒绝
//初始化期约时，执行器函数已经改变了每个期约的状态。
let p1 = new Promise((resolve, reject) => resolve());
setTimeout(console.log, 0, p1);

let p2 = new Promise((resolve, reject) => reject());
setTimeout(console.log, 0, p2);
//无论resolne()还是reject哪个被调，状态不会再撤销了
//例如
let p3 = new Promise((resolve, reject) => {
    resolve();
    reject();// 没有效果
});

//为了避免卡在待定状态 可以添加一个定时退出功能
//例如 可以通过给setTimeout设置一个10秒后无论如何都会变成拒绝期约
let p4 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000);
});
setTimeout(console.log, 0, p4);//ok
setTimeout(console.log, 11000, p4);//再检查一下状态
//如果执行器中的代码在超时之前已经解决或拒绝，那么超时回调再尝试拒绝也会静默失败

//Promise.resolve()
//两个写法一样
let p6 = new Promise((resolve, reject) => Promise());
let p7 = Promise.resolve();
//解决期约的值应该传给Promise.resolve()第一个参数，实际可以把任何一个值转换为一个期约
setTimeout(console.log, 0, Promise.resolve(3));

// 多余的参数会忽略 
setTimeout(console.log, 0, Promise.resolve(4, 5, 6));
// Promise <resolved>: 4 

/* 任何非期约值，包括错误对象，并将其转换为解决的期约。因此，也
可能导致不符合预期的行为：  */

let p = Promise.resolve(new Error('foo'));

setTimeout(console.log, 0, p);

// Promise <resolved>: Error: foo 

/* 这个拒绝的期约的理由就是传给 Promise.reject()的第一个参数。这个参数也会传给后续的拒
绝处理程序：  */
let p8 = Promise.reject(3);
setTimeout(console.log, 0, p8); // Promise <rejected>: 3 

//期约的方法:  访问异步操作返回的数据，处理期约成功或者失败的结果，连续对期约求值，或者添加只有期约进入终止状态时才会执行的代码

// Promise.prototype.then() 接收两个参数:onResolved 和onRejected
function onResolved(id) {
    setTimeout(console.log, 0, id, 'resolved');
}
function onRejected(id) {
    setTimeout(console.log, o, id, 'rejected');
}
let p12 = new Promise((resolve, reject) => setTimeout(resolve, 3000));
let p13 = new Promise((resolve, reject) => setTimeout(reject, 1000));

p12.then(() => onResolved('p12'),
    () => onRejected('p12'));
//p2.then(null, () => onRejected('p2'));  
//.then方法会返回一个新的期约 onResovled处理程序的返回值会通过Promise.resolved()包装
//生产一个新的实例如果没有提供这个处理程序，则 Promise.resolve()就会包装上一个期约解决之后的值
//。如果没有显式的返回语句，则 Promise.resolve()会包装默认的返回值 undefined。



//若调用then时候不传处理程序 则原样往回传
let pn1 = Promise.resolve('foo');
let pn2 = p1.then();
setTimeout(console.log, 0, pn2);

let p3n = p1.then(() => undefined);
let p4n = pn1.then(() => { });
let p6n = pn1.then(() => Promise.reslove);
setTimeout(console.log, 0, p3n); // Promise <resolved>: undefined 
setTimeout(console.log, 0, p4n); // Promise <resolved>: undefined 
setTimeout(console.log, 0, p6n); // Promise <resolved>: undefined 

let p6n1 = p1.then(() => 'bar');
let p7n = p1.then(() => Promise.resolve('bar'));

setTimeout(console.log, 0, p6n1); // Promise <resolved>: bar 
setTimeout(console.log, 0, p7n); // Promise <resolved>: bar 

//finally()方法主要给期约添加onFinally处理程序，用来处理冗余代码
//p100.finally  返回一个新的期约实例

let p100 = Promise.resolve();
function onFinally() {
    setTimeout(console.log, 0, 'finally');
}
p100.finally(onFinally);




/* let p1b = Promise.resolve('foo'); 
function onResolved(value){
   setTimeout(console.log,0,value);
}
p1b.then(onResolved); // foo 

let p2b =Promise.reject('12');
function onResolved(reason){
   setTimeout(console.log,0,reason);
}
p2b.then(onResolved); */


//异步执行
 let res1 = Promise.reject( Error('fue'));

function delayedResolve(str){
    return new Promise((resolve,reject)=>{
        console.log(str);
        setTimeout(resolve,1000);
    })
}
delayedResolve('p1 exe')
.then(()=>delayedResolve('p2 exe'))
.then(()=>delayedResolve('p3 exe'))
.then(()=>delayedResolve('p4 exe')) 

//promise.all 将多个期约组合成一个
/* let pm1 =Promise.all([Promise.resolve(),
                     Promise.resolve()]); */

//p366

//合成的新期约会在包含的每个期约执行完成之后才执行
let p11 = Promise.all([
    Promise.resolve(),
    new Promise((resolve, reject) => setTimeout(resolve, 1000))
]);
setTimeout(console.log, 0, p11); // Promise <pending> 

p11.then(() => setTimeout(console.log, 0, 'all() resolved!'));
// all() resolved!（大约 1 秒后） 

//如果里面所有期约都解决，每个解决的期约值合成的数组就是合成期约的值
let p43 =Promise.all([
    Promise.resolve(3),
    Promise.resolve(),
    Promise.resolve(2)
]);
p43.then((value)=>setTimeout(console.log,1000,value));
//[ 3, undefined, 2 ]

//如果合成期约中有拒绝期约 则他的第一个拒绝期约理由就是整个合成期约的拒绝理由

/* let p = Promise.all([ 
    Promise.reject(3), 
    new Promise((resolve, reject) => setTimeout(reject, 1000)) 
   ]); 
    
   p.catch((reason) => setTimeout(console.log, 0, reason)); */ // 3
   
   
   //promise.race()返回一个包装期约，是一组集合中最先解决或者拒绝的期约的镜像
   //promise.race()不会对解决或者拒绝的期约区别对待，无论解决还是拒绝，只要第一个
   //落定的期约，Promise.race()就会包装其解决值或拒绝理由并返回新期约

   // 解决先发生，超时后的拒绝被忽略 
/* let p1 = Promise.race([ 
    Promise.resolve(3), 
    new Promise((resolve, reject) => setTimeout(reject, 1000)) 
   ]); 
   setTimeout(console.log, 0, p1);  */
  //Promise { 3 } 

//只会把第一个作为整个期约的值
 /*  let p3 = Promise.race([ 
    Promise.resolve(5), 
    Promise.resolve(6), 
    Promise.resolve(7) 
   ]); 
   setTimeout(console.log, 0, p3);  */
   // Promise { 5 }

   //promise.race()第一个期约是拒绝期约会作为整个期约的理由，但是并不影响其他期约
   //正常的拒绝操作

//展现 期约的值也可以接收上一个期约的值
function addTwo(x) {return x + 2;} 
function addThree(x) {return x + 3;} 
function addFive(x) {return x + 5;} 
function addTen(x) { 
    return Promise.resolve(x) 
    .then(addTwo) 
    .then(addThree) 
    .then(addFive); 
   } 
    
   addTen(8).then(console.log); // 18 

   //async  关键字用于声明异步函数。这个关键字可以用在函数声明，函数表达式，箭头函数和方法上
   //async可以让函数有异步特性
   /* async function t1 (){}
   let oo1 = async function() {};
   let pv1  = async()=>{};
   class a12{
    async qu12(){}
   }
 */

  // 异步函数如果使用 return 关键字返回了值（如果没有 return 则会返回 undefined），这
//个值会被 Promise.resolve()包装成一个期约对象。异步函数始终返回期约对象。
 async function fn1(){
    return 3;
 }
 fn1.then(console.log);
 //3


 //await可以暂停异步函数代码的执行，等待期约的解决

 console.log(1);
 async function foo() {
     let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'ok'));
     console.log(await p);
    // await null;
     console.log('one');
 }
 
 foo();
 console.log(33);
/*  1
 33
 ok
 one */



//立即调用的异步函数怎么写
(async function(){
     console.log(await Promise.resolve(3));
})();



//378


//await 后面跟着一个立即可用的值，函数的其余部分也会被异步求值
async function foo() { 
    console.log(2); 
    await null; 
    console.log(4); 
   } 
    
   console.log(1); 
   foo(); 
   console.log(3); 
    
   // 1 
   // 2 
   // 3 
   // 4 



   async function sleep(delay) { 
    return new Promise((resolve) => setTimeout(resolve, delay)); 
   }
   async function foo11() { 
    const t0 = Date.now(); 
    await sleep(1500); // 暂停约 1500 毫秒 
    console.log(Date.now() - t0); 
   } 
   foo11(); 
   // 1505

   async function addTwo(x) {return x + 2;} 
   async function addThree(x) {return x + 3;} 
   async function addFive(x) {return x + 5;} 
    
   async function addTen(x) { 
    for (const fn of [addTwo, addThree, addFive]) { 
    x = await fn(x); 
    } 
    return x; 
   } 
    
   addTen(9).then(console.log); // 19

