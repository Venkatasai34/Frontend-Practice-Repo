console.log(a); // undefined
var a = 7;

console.log(x); //ref error: not defined ( it will stop executing the program)
console.log(a); // 7

// Undefined is a special keyword it takes up its own memory which is kept
// for the time being until the var is assigned some other value.

// js is a loosely types lang a.k.a weakly typed lang

var a;
console.log(a); // undefined;
a = 10;
console.log(a);  // 10
a = "hello world";
console.log(a); // "hello world"

// a = undefined  ==> never do this mistake, not a good practice

// 🧠 Tip
// if (a === undefined) { ... }
// // better written as:
// if (typeof a === "undefined") { ... }
// This avoids a crash if a is not declared at all.

// 🔍 1. undefined
// ✅ Declared but not assigned a value
// JavaScript allocates memory and sets the value to undefined during the memory creation phase.

// Happens with variables declared using var, let, or const (though let/const behave slightly differently).

// var a;
// console.log(a); // ✅ undefined
// javascript
// Copy code
// let b;
// console.log(b); // ✅ undefined (but not hoisted as `var`)
// javascript
// Copy code
// var x = undefined;
// console.log(x); // ✅ undefined — explicitly assigned


// ❌ 2. not defined
// ❌ Variable was never declared
// JavaScript can't find it in memory → throws a ReferenceError.

// javascript
// Copy code
// console.log(c); // ❌ ReferenceError: c is not defined
// 🧠 Summary Table
// Case	                     Declared	Assigned	Access Result
// var a;	                    ✅	      ❌	        undefined
// let b;	                    ✅	      ❌	        undefined
// const c;     	            ✅	      ❌	    ❌ SyntaxError
// var x = undefined;	        ✅	      ✅	        undefined
// console.log(notDeclared);	❌	      ❌	    ❌ ReferenceError









