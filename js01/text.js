/*   let p4 = new Promise((resolve,reject)=>{
    setTimeout(reject,1000);
});
setTimeout(console.log,0,p4);//Promise { <pending> }
setTimeout(console.log,11000,p4);//err

let p7=Promise.resolve();
setTimeout(console.log, 0, Promise.resolve(4, 5, 6)); //Promise { 4 }

let pn1 = Promise.resolve('foo');
let pn2 = pn1.then();
setTimeout(console.log,0,pn2);
//Promise { 'foo' }
 
let pn1 = Promise.resolve('foo'); 
let p3n = pn1.then(()=>undefined); 
let p4n =pn1.then(()=>{}) ;
let p6n = pn1.then(()=>Promise.reslove);
setTimeout(console.log, 0, p3n); 
setTimeout(console.log, 0, p4n); 
setTimeout(console.log, 0, p6n);  */
/* Promise { undefined }
Promise { undefined }
Promise { undefined } 

/* function onResolved(id){
    setTimeout(console.log,0,id,'resolved');
}
function onRejected(id){
    setTimeout(console.log,o,id,'rejected');
}
let p12 =new Promise((resolve,reject)=>setTimeout(resolve,3000));
let p13=new Promise((resolve,reject)=>setTimeout(reject,1000));

p12.then(()=>onResolved('p12'),
()=>onRejected('p13')); */



//let p1 = Promise.resolve('foo');
/* let p6n1 = p1.then(() => 'bar'); 
let p7n = p1.then(() => Promise.resolve('bar')); 
 
setTimeout(console.log, 0, p6n1); 
setTimeout(console.log, 0, p7n);  */
/* Promise { 'bar' }
Promise { 'bar' } */

//抛出异常会返回拒绝的期约
/* let p10 = p1.then(()=>{throw 'baz';});
setTimeout(console.log,1000,p10) */

//返回错误值不会触发上面的拒绝行为，而会把对象包装在一个解决的期约中
/* let p11 =p1.then(()=>Error('qzd'));
setTimeout(console.log,1000,p11) */

/* function onResolved(id) { 
    setTimeout(console.log, 0, id, 'resolved');}
    let p1n = new Promise((resolve, reject) => setTimeout(resolve, 3000));  
    p1n.then(() => onResolved('p1n'), 
 () => onRejected('p1'));  */
//p1 resolved

/* let p22n =new Promise((resolve,reject)=>setTimeout(resolve,3000));
function onResolved(id){
   setTimeout(console.log,0,id,'1')
}
p22n.then(null,()=>onRejected(2)); */

//catch 相当于只是调用onReject
/*  let p32 =Promise.reject();
 function onRejected (){
    setTimeout(console.log,0,'reject')
 }
 p32.catch(onRejected); *///p32.then(null,()=>onRjected);


/*  let p1b = Promise.resolve('foo'); 
 function onResolved(value){
    setTimeout(console.log,0,value);
 }
p1b.then(onResolved); */ // foo 

/* let p2b =Promise.reject('12');
function onResolved(reason){
    setTimeout(console.log,0,reason);
 }
p2b.then(onResolved);
 */
/* console.log('bar');
let res1 = Promise.reject( Error('fue')); */


//异步执行
/* function delayedResolve(str){
    return new Promise((resolve,reject)=>{
        console.log(str);
        setTimeout(resolve,1000);
    })
}
delayedResolve('p1 exe')
.then(()=>delayedResolve('p2 exe'))
.then(()=>delayedResolve('p3 exe'))
.then(()=>delayedResolve('p4 exe')) */
/* p1 exe
p2 exe
p3 exe
p4 exe */
/* let p43 =Promise.all([
    Promise.resolve(3),
    Promise.resolve(),
    Promise.resolve(2)
]);
p43.then((value)=>setTimeout(console.log,1000,value)); */
//[ 3, undefined, 2 ]


/* let p = Promise.all([ 
    Promise.reject(3), 
    new Promise((resolve, reject) => setTimeout(reject, 1000)) 
   ]); 
    
   p.catch((reason) => setTimeout(console.log, 0, reason));  */
// 3 

// 解决先发生，超时后的拒绝被忽略 
/* let p1c = Promise.race([
    Promise.resolve(3),
    new Promise((resolve, reject) => setTimeout(reject, 0))
]);
setTimeout(console.log, 0, p1c); */
//Promise { 3 }

/*  let p2c = Promise.race([
  Promise.reject('ox'),
  Promise.resolve(3), 
 ]); */
//p2c.catch((reason)=> setTimeout(console.log,0,reason));   ox
// p2c.catch(()=> setTimeout(console.log,0,p2c)); Promise { <rejected> 'ox' }
//setTimeout(console.log,0,p2c)


/* let p3 = Promise.race([
    Promise.resolve(5),
    Promise.resolve(6),
    Promise.resolve(7)
]);
setTimeout(console.log, 0, p3); */
// Promise { 5 }

//reduce 为数组中的每一个元素依次执行回调函数，
//不包括数组中被删除或从未被赋值的元素，接受四个参数：初始值（
//或者上一次回调函数的返回值），当前元素值，当前索引，调用 reduce 的数组。

//展现 期约的值也可以接收上一个期约的值
/* function addTwo(x) { return x + 2; }
function addThree(x) { return x + 3; }
function addFive(x) { return x + 5; }
function addTen(x) {
    return Promise.resolve(x)
        .then(addTwo)
        .then(addThree)
        .then(addFive);
}

addTen(8).then(console.log); */
// 18 

/* async function fn1() {
    return 3;
}
fn1().then(console.log); */
//3
console.log(1);
async function foo() {
    let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'ok'));
    console.log(await p);
 // await null;
    console.log('one');
}

foo();
console.log(33);
/* 1
33
ok
one */

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