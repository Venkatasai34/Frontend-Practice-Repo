console.log(getName); // prints full function  
console.log(x); // undefined

getName();  // Hello
var x = 7;
function getName(){
    console.log("Hello");
}

console.log(a); // Ref error : a is not defined

// Here x was alloted to a memory space 
// before actually running the line var x = 7 
// during memory create phase of execution context
// all var allocated as undefined
// so we are trying to access x or print x in console before actually executing the line var x = 7;
// it results in printing undefined 
// this is called hoisting 

//var → hoisted, initialized as undefined.

// function → hoisted with full body.

// Accessing undeclared variables (like a) → ReferenceError.

// This is hoisting — JavaScript's way of setting up variables and functions in memory before code runs.