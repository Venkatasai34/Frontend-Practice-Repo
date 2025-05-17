var x = 1;
a(); // a function is invoked
b(); // a function is invoked
console.log(x); // 1

function a(){
    var x = 10;
    console.log(x); // 10
}
function b(){
    var x = 100;
    console.log(x); // 100
}

//when a function is invoked, js
//creates new execution context for the function and
// when we are printing the x in the console in function a()
// it takes the value of x which is present in that function or you can say lexical env of that function
// basically it means that it will get the value of x from a()  or its parent or furthur

//🔍 What's Happening:
// 🌐 Global Execution Context
// var x = 1 → x is stored in the global scope.

// a() and b() are declared and hoisted with full function bodies.

// 🧭 Function Invocation: a()
// JS creates a new execution context for a().

// In this context, var x = 10 is local to a().

// console.log(x) inside a() logs 10.

// 🧭 Function Invocation: b()
// Again, a new execution context for b() is created.

// var x = 100 is local to b().

// console.log(x) logs 100.

// 🌍 Back to Global
// console.log(x) accesses the global x, which is 1.

// 📌 Key Concepts:
// Function Scope: var is function-scoped — the x inside a() or b() is separate from the global x.

// Lexical Environment: Each function's environment includes its own variables and a reference to its outer environment (the global scope in this case).

// Scope Chain Lookup: If a variable isn't found in the current function, JavaScript looks "upward" through the chain.
