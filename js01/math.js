/* function dosum(num1, num2) {
   if ((typeof num1 == "string") || (typeof num2 == "string")) {
      console.warn('您输入的是字符串类型');

   }
   return parseFloat(num1) + parseFloat(num2);
}
console.log(dosum("1", 2));
 */


 //求最大值
/* var arr1 = [11, 22, 50, 30,20];
var res1 = arr1[0];
function doMax() {
   for (var i = 1; i < arr1.length; i++) {
      if (arr1[i] > arr1[i-1]) {
         res1 = arr1[i];
      }
  }    
   return res1;

}
doMax(arr1);
console.log(res1);  */

//排序
/* var arr1 = [11, 22, 10, 30];
var mid;
function paiXu() {
   for (var i = 0; i < arr1.length; i++) {


      for (var j = 0; j < arr1.length - i - 1; j++) {

         if (arr1[j] < arr1[j + 1]) {
            mid = arr1[j];
            arr1[j] = arr1[j + 1];
            arr1[j + 1] = mid;
        
              

         }
              
      }
   }
   return arr1;
}
paiXu(arr1);
console.log(arr1); */
/* var person = {
   fullName: function() {
       return this.firstName + " " + this.lastName;
   }
}
var person1 = {
   firstName:"Bill",
   lastName: "Gates",
}
var person2 = {
   firstName:"Steve",
   lastName: "Jobs",
}
console.log(person.fullName.call(person1));  // 将返回 "Bill Gates" */

/* 
var person = {
   fullName: function(city, country) {
     return this.firstName + " " + this.lastName + "," + city + "," + country;
   }
 }
 var person1 = {
   firstName:"Bill",
   lastName: "Gates"
 }
 console.log( person.fullName.call(person1, "Seattle", "USA")); */
/* 
 function fn1(num1,num2){
sum=num1+num2;
   return sum;
}
fn1(1,2);
console.log(sum);

function qzd() {
    
   console.log(name1); // undefined 
  var name1 = 'Jake';
}
qzd();
 */
var obj1 =Object.freeze({
   name : 'jack'
}
   )
   obj1.name='lele';
console.log(obj1.name);
//(/月/日/年)
let da1 = new Date;
let da2 = Date.parse("2/1/1999");
console.log(da2);
let da4 = Date.parse("2/2/1999");
console.log(da4);
let da5 =Date.UTC(1999,2,1);
console.log(da5);

let y2k = new Date(2000, 1, 14, 5, 12, 22);
console.log(y2k);

let y3k=da1.toLocaleDateString();
console.log(y3k);
//2023/1/19

let bum2 = "abcd";
let str = bum2.charCodeAt(1);
console.log(str);

let str2=String.fromCharCode(44,33);
console.log(str2); //,!

let num99 =9.9;
console.log(num99.toPrecision(1));
console.log(num99.toExponential(1));
console.log(num99.toExponential(2));

let numb1 =10;
console.log(numb1.toFixed(1));
console.log(numb1.toFixed(2));

let obj3 =new Object(123);
console.log(obj3 instanceof Number);//true
let s1 = "some text";
let s2 = s1.substring(2);
console.log(s2);