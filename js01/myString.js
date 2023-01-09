console.log('123456789\nabcdefghj');
/* 123456789
abcdefghj */
console.log('123456789\tabcdefghj');
//123456789       abcdefghj
console.log('123456789\\abcdefghj');
//123456789\abcdefghj
console.log('123456789\fabcdefghj\f123');
/* 123456789
         abcdefghj
                  123 */
console.log('123456789\rabcdefghj');
//abcdefghj
console.log('123456789\babcdefghj');
//12345678abcdefghj

let text = "This is the letter sigma: \u03a3.";
console.log(text);
//This is the letter sigma: Σ.




let myStr = `
  quan
  zhi`;
console.log(myStr[0]==='\n');
/* quan
  zhi */

let myMultiLineTemplateLiteral11 = `first line 
second line`;
console.log(myMultiLineTemplateLiteral11);
/* first line
second line */

let pageHTML = ` 
<div> 
 <a href="#"> 
 <span>Jake</span> 
 </a> 
</div>`; 
console.log(pageHTML);
/* <div>
 <a href="#">
 <span>Jake</span>
 </a>
</div> */

let secondTemplateLiteral = ` 
first line 
second line`; 
console.log(secondTemplateLiteral[0] === '\n') ;

const myStr3 = `12 3
4`
console.log(myStr.length);

let mtStr5='quan';
let myStr6='zhi';
let myStr8=`${mtStr5}${ myStr6}`
console.log(myStr8);
//quanzhi

 
let res2 = 'qzd'.toString();
console.log(res2);

let text1 = "This isthelettersigma:\u6211";
console.log(text1.length);
//This is the letter sigma:我

function capitalize(word) { 
    return `${ word[0].toUpperCase() }${ word.slice(1) }`; 
   } 
   console.log(`${ capitalize('hello') }, ${ capitalize('world') }!`); 
   // Hello, World!
   
   let value = '123'; 
function append() { 
 value = `${value}abc` 
 console.log(value); 
} 
append();
//123abc