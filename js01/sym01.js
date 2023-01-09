
let sym = Symbol(); 
console.log(typeof sym);
//symbol

let genericSymbol = Symbol(); 
let otherGenericSymbol = Symbol();
console.log(genericSymbol == otherGenericSymbol); 
// false

let mySymbol = new Symbol(); 
console.log(mySymbol);

let mySymbol2 = Symbol(); 
let myWrappedSymbol = Object(mySymbol2); 
console.log(typeof myWrappedSymbol); // "object" 