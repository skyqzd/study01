//创建对象的通常方式是创建Object的一个实例，再给他添加属性和方法
const obj1 = new Object();
obj1.name = 'nike';
obj1.age = '13';
obj1.saymame = function () {
    console.log(this.name)
};
obj1.doTging = function () {
    alert('ok');
};

let obj2 = {
    name: 'like',
    age: 12,
    sayname() {
        alert('ok');
    }
};
console.log(obj2);
//{ name: 'like', age: 12, sayname: [Function: sayname] }


//通过Object.defineProperty修改属性
Object.defineProperty(obj2, 'name', {
    configurable: false,
    writable: false,
    value: 'jack'
});
delete obj2.name;
console.log(obj2.name);
obj2.name = 'qqq';
console.log(obj2.name);
//{ name: 'jack', age: 12, sayname: [Function: sayname] }
//jack  Jack


//如何理解
//在调用 Object.defineProperty()时，configurable、enumerable 和 writable 的值如果不
//指定，则都默认为 false。


//为啥是{}
let obj3 = {};
let quan=Object.defineProperties(obj3, {
    name: {
        writable: true,
        value: 'qq'

    },
    age: {
        value: 88
    }
});
console.log(quan);

let obj4 = {
    name: {
        value: 'qq',
        writable: true
    },
    age: {
        value: 13
    }
}
let res1 = Object.getOwnPropertyDescriptor(obj4, 'name');
console.log(res1.writable);
//true 使用Object.getOwnPropertyDescriptor来获取属性及其描述


//用Object.getOwnPropertyDescriptors来得到所有属性及其方法
let res2 = Object.getOwnPropertyDescriptors(obj4);
console.log(res2);

/* {
    name: {
      value: { value: 'qq', writable: true },
      writable: true,
      enumerable: true,
      configurable: true
    },
    age: {
      value: { value: 13 },
      writable: true,
      enumerable: true,
      configurable: true
    }
  } */


//用Object.assign来复制对象 两个参数 第一个要复制到 的对象 第二个是要复制的对象
const obja = {};
const objb = {
    name: 'age',
    age: 12
};
Object.assign(obja, objb);
console.log(obja);
//{ name: 'age', age: 12 }
dest = {};
Object.assign(dest, { a: 'foo' }, { b: 'bar' });
console.log(dest);
//{ a: 'foo', b: 'bar' }

// Object.assign复制内容有相同的属性，后面的内容会覆盖前边的
dest1 = { id: 'dest' };
result1 = Object.assign(dest1, { id: 'src1', a: 'foo' }, { id: 'src2', b: 'bar' });
console.log(result1);
// { id: src2, a: foo, b: bar } 



//用Object.is 判断是否相等
console.log(Object.is(true, 1)); // false 
console.log(Object.is({}, {})); // false 
console.log(Object.is("2", 2)); // false 

// 正确的 0、-0、+0 相等/不等判定 
console.log(Object.is(+0, -0)); // false 
console.log(Object.is(+0, 0)); // true 
console.log(Object.is(-0, 0)); // false 

//当对象内的属性名和外边变量名一样时候，可以简单写
let name44 = 'nike';
const obj7 = {
    name44v
}
console.log(obj7);
//{ name44: 'nike' }


//把变量的值设置为对象中属性键 用[]
const nameKey = 'name11';
const agekey = 'age11';
const jobkey = 'job11';
let person = {
    [nameKey]: 'matt',
    [agekey]: 13

}
console.log(person);
//{ name11: 'matt', age11: 13 }

//简写对象中的方法 方法名(){}
let s1 = {
    sayName(name) {
        console.log(`My name is ${name}`);
    }
}
s1.sayName('kitty');
//My name is kitty
const ethod1 = 'sayName2';
let person133 = {
    [ethod1](name) {
        console.log(`My name is ${name}`);
    }
}
person133.sayName2('cool');


//My name is cool

//对象解构 使用与对象匹配的结构来实现对象属性赋值
let persons1 = {
    name: 'mike',
    age: 23
};
const { name: doName, age: doAge } = persons1;
console.log(doName);
//mike
//变量使用对象属性的名字
//const{name,age}=persons1


//赋值的时候如果 引用的属性不存在 就会返回undefined
const ress1 = {
    age: 12,
    job: 'teacher'
}
const { age: q1t, name: q2t } = ress1;
console.log(q1t);
console.log(q2t);
//12
//undefined

//也可以在解构赋值时添加自定义属性
const { age, job = 'teacher' } = ress1;
console.log(job);
//teacher


//?????
let { length } = 'wing';
console.log(length);
// 4 

let { constructor: c } = 4;
console.log(c);
//[Function: Number]

//构造函数    开头也可以写成let Person =function(name,age,job){}
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    };
}
let person1 = new Person("Nicholas", 29, "Software Engineer");
let person2 = new Person("Greg", 27, "Doctor");

person1.sayName(); // Nicholas 
person2.sayName(); // Greg 


//248 ???


//使用prototyp是为了解决每次调用都声明一个function函数
function Person() { }
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
    console.log(this.name);
};

let person12 = new Person();
person1.sayName(); // "Nicholas" 

let person22 = new Person();
person2.sayName(); // "Nicholas"

//Object.values()和Object.entries()接收一个对象，返回他们内容的数组。
//Object.values()返回对象值的数组，Object.entries()返回键值对的数组
const o = {
    foo: 'bar',
    baz: 1,
    qux: {}
};
console.log(Object.values(o));
// ["bar", 1, {}] 
console.log(Object.entries((o)));
// [["foo", "bar"], ["baz", 1], ["qux", {}]] 