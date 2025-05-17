// empty js file is the shortest js program
// it does create a global execution context 
// does create  window global object and this keyword points to window

// (this === window) ==> true

var a = 10; // global space
function b(){
    var x = 10;
}
b();
console.log(window.a); // 10
console.log(a); // 10   it assumes global space
console.log(this.a); // 10

console.log(x); // ref error : x is not defined

//🔍 Breakdown:
// 🌐 Global Execution Context:
// Created when the JS program starts.

// Sets up:

// The global object: in browsers, it’s window

// The this keyword: in global scope, points to window


// this === window // ✅ true (in browser)
// ⚙️ var in Global Scope:
// var a = 10 adds a as a property to the global object.

// So: window.a === a === this.a

// 🔒 Function Scope:
// x is declared inside b() with var, so it's not accessible globally.

// Trying to access x outside throws a ReferenceError.

// 📌 TL;DR
// ✅ var in global scope → becomes property of window

// ✅ this in global scope → points to window

// ✅ function declarations don't run until invoked

// ❌ var inside function → not accessible outside