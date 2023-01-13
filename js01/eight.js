let fun = {
    age: 12,
    name: 'nike',
    sayName() {
        console.log('ok');
    }
}
//修改对象的默认属性 就必须使用 Object.defineProperty()
Object.defineProperty(fun, "name", {
    value: "kity",
    configurable: false

})
console.log(fun);
//{ age: 12, name: 'kity', sayName: [Function: sayName] }
delete fun.name;
console.log(fun.name);
//kity  configurable 设置为false之后不能再进行修改

let book = {
    year_: 2017,
    edition: 1,
};
Object.defineProperty(book, "year", {
    get() {
        return this.yaer_;
    },
    set(newValue) {
        if (newValue > 2017) {
            this.year_ = newValue;
            this.edition += newValue - 2017;
        }
    }
});
book.yaer = 2018;
console.log(book.edition);
//1




let vook1 = {};
Object.defineProperties(vook1, {
    year_: {
        value: 2017
    },

    edition: {
        value: 1
    },

    year: {
        get() {
            return this.year_;
        },
        set(newValue) {
            if (newValue > 2017) {
                this.year_ = newValue;
                this.edition += newValue - 2017;
            }
        }
    }
});

//这段代码在 book 对象上定义了两个数据属性 year_和 edition，
//还有一个访问器属性 year。
//delete vook1.yaer_;
console.log(vook1);
//{}
console.log(vook1.edition);

let newBo = Object.getOwnPropertyDescriptor(vook1, "edition");
console.log(newBo.configurable);
//false
let newBo1 = Object.getOwnPropertyDescriptor(vook1, "year_");
console.log(newBo1.value);
//2017
console.log(Object.getOwnPropertyDescriptors(vook1));
/* {
    year_: {
        value: 2017,
        writable: false,
        enumerable: false,
        configurable: false
      },
      edition: { value: 1, writable: false, enumerable: false, configurable: false },
      year: {
        get: [Function: get],
        set: [Function: set],
        enumerable: false,
        configurable: false
      }
    } */




let dest, src, result;

/** 
 * 简单复制 
 */
dest = {};
src = { id: 'src' };

result = Object.assign(dest, src);
//将src复制到dest并保存在result
console.log(result);

let result2;
result2 = Object.assign(dest, { name: 'kuke' }, { age: 12 });
//将{name:'kuke'},{ age:12} 复制到dest 保存到reault2
console.log(result2);
//{ id: 'src', name: 'kuke', age: 12 }


let res = {};
let rs1 = {};

rs1 = {
    function() {
        alert();
    }

}
Object.assign(res, rs1);
console.log(res);
//{ function: [Function: function] }

/** 
 * 覆盖属性 
 */
/* dest = { id: 'dest' }; 
 
result = Object.assign(dest, { id: 'src1', a: 'foo' }, { id: 'src2', b: 'bar' }); 
 
// Object.assign 会覆盖重复的属性 
console.log(result); // { id: src2, a: foo, b: bar }  */

console.log(Object.is(true, 1)); // false 
console.log(Object.is({}, {})); // false 
console.log(Object.is("2", 2)); // false 
console.log(Object.is(+0, -0)); // false 
console.log(Object.is(+0, 0)); // true 
console.log(Object.is(-0, 0)); // false 

function recursivelyCheckEqual(x, ...rest) {
    return Object.is(x, rest[0]) &&
        (rest.length < 2 || recursivelyCheckEqual(...rest));
}

let obj1 = recursivelyCheckEqual(1, 1, 1);
console.log(obj1);
//true

let name1 = 'kitty';
let person = {
    name1
}
console.log(person);
//{ name1: 'kitty'}

const name3 = 'kk';
const age3 = 'age';
let person1 = {
    [name3]: 'qq',
    [age3]: 12

}
console.log(person1);
//{ kk: 'qq', age: 12 }
let { kk: myName, age: myAge } = person1;
console.log(myName);



let person7 = {
    name55: 'Matt',
    age55: 27
};
let { name55, age55 } = person7;
console.log(name55); // Matt 
console.log(age55); // 27 
//let {name55,job='qq'} = person7; 

/*    let {cons :c}=4;
   console.log(c===Number); */

//解构并不要求变量必须在解构表达式中声明。，不过如果提前声明了
//就放在一个括号中
let num1;
let num2;
let obj2 = {
    name22: 'kk',
    age22: 12
};
({ name22: num1, age22: num2 } = obj2)
console.log(num1, num2);
//kk 12  如果用到申明过的变量则用()阔起来


let obj5 = {
    name88: 'jake',
    age99: 99

};
let obj6 = {};
({ name88: obj6.name01, age99: obj6.age02 } = obj5);
console.log(obj6);
//{ name01: 'jake', age02: 99 }
obj5.name88 = 'aaaa';
console.log(obj5);
//{ name88: 'aaaa', age99: 99 }



let person101 = {
    name101: 'Matt',
    age101: 27,
    job101: {
        title: 'Software engineer'
    }
};

// 声明 title 变量并将 person.job.title 的值赋给它 
let { job101: { title } } = person101;
console.log(title);
//Software engineer


//8.2

function createPerson(names, ages, jobs) {
    let obj21 = new Object();
    obj21.name = names;
    obj21.age = ages;
    obj21.job = jobs;
    obj21.sayName1 = function () {
        console.log(this.name);
    };
    return obj21;
}
let person13 = createPerson("Nicholas", 29, "Software Engineer");
let person23 = createPerson("Greg", 27, "Doctor");
console.log(person23);
   /*  {
name: 'Greg',
age: 27,
job: 'Doctor',
sayName1: [Function (anonymous)]
} */

//构造函数
function person09 (nameq,ageq,jobq){
       this.name = nameq;
       this.age  = ageq;
       this.job = jobq;
       this.sayNameq = function(){
        console.log(this.name);
       };

}0
let person87 = new person09('nike',12,'teacher');
console.log(person87 );
