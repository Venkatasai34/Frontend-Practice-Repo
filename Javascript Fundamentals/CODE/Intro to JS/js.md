# 📘 JavaScript Hoisting, Scopes & Declarations - A Clean Summary

This README is a comprehensive guide to **JavaScript Hoisting**, **Execution Context**, **Scopes**, **var/let/const behaviors**, and **Common Pitfalls** — with code snippets and explanations. Perfect for revision or sharing with peers!

---

## 📌 Table of Contents

1. [Hoisting in JavaScript](#hoisting-in-javascript)
2. [Function & Variable Hoisting](#function--variable-hoisting)
3. [Scopes and Execution Contexts](#scopes-and-execution-contexts)
4. [Global vs Local Scope](#global-vs-local-scope)
5. [var vs let vs const](#var-vs-let-vs-const)
6. [Temporal Dead Zone](#temporal-dead-zone)
7. [ReferenceError vs Undefined](#referenceerror-vs-undefined)
8. [Best Practices](#best-practices)

---

## 🧠 Hoisting in JavaScript

> **Hoisting** is JavaScript's behavior of moving variable and function declarations to the top of their containing scope **during the memory creation phase**.

```js
console.log(getName); // ✅ Logs full function
console.log(x);       // ✅ Logs: undefined

getName(); // ✅ Logs: Hello

var x = 7;

function getName() {
  console.log("Hello");
}

🧾 Hoisting Summary
Type	Hoisted?	Initialized?	Example Access Before Declaration
var	✅ Yes	✅ As undefined	✅ Logs undefined
function	✅ Yes	✅ With full body	✅ Runs
let/const	✅ Yes	❌ Not initialized (TDZ)	❌ ReferenceError

🧭 Scopes and Execution Contexts
js
Copy
Edit
var x = 1;

function a() {
  var x = 10;
  console.log(x); // 10
}

function b() {
  var x = 100;
  console.log(x); // 100
}

a();
b();

console.log(x); // 1 (Global)
🔍 Explanation:
Each function creates its own execution context.

Variables declared inside are function-scoped (var) and do not affect the global x.

Lookup for variables follows the scope chain.

🌍 Global vs Local Scope
js
Copy
Edit
var a = 10;

function b() {
  var x = 10;
}

b();

console.log(window.a); // 10
console.log(a);        // 10
console.log(this.a);   // 10

console.log(x); // ❌ ReferenceError: x is not defined
💡 Notes:
var in global scope becomes a property of window.

this in global scope refers to window.

Function-local variables (x in b()) are not accessible outside.

🧪 var vs let vs const
✅ var
js
Copy
Edit
var z = 100;
var z = 200; // ✅ Redeclaration allowed
✅ let
js
Copy
Edit
let h = 10;
// let h = 20; ❌ SyntaxError: Identifier 'h' has already been declared

h = 20; // ✅ Reassignment allowed
✅ const
js
Copy
Edit
const k = 10;
// k = 20; ❌ TypeError: Assignment to constant variable
// const x; ❌ SyntaxError: Must be initialized
🚫 Temporal Dead Zone (TDZ)
js
Copy
Edit
console.log(a); // ❌ ReferenceError
console.log(b); // ✅ undefined
let a = 10;
var b = 100;
let and const are hoisted but uninitialized.

The TDZ is the period between entering the scope and initialization.

❓ ReferenceError vs undefined
js
Copy
Edit
var a;
console.log(a); // ✅ undefined

console.log(c); // ❌ ReferenceError: c is not defined
✅ Safe Check
js
Copy
Edit
if (typeof maybeVar === "undefined") {
  console.log("Variable not declared or uninitialized.");
}
📋 Summary Table
Case	Declared	Assigned	Access Result
var a;	✅	❌	✅ undefined
let b;	✅	❌	✅ undefined
const c;	✅	❌	❌ SyntaxError
var x = undefined;	✅	✅	✅ undefined
console.log(notDeclared)	❌	❌	❌ ReferenceError

✅ Best Practices
Always declare variables at the top of their scope.

Avoid using var in modern code; prefer let and const.

Don’t manually assign undefined — let JS handle that.

Use typeof checks to avoid runtime errors with undeclared variables.

🧑‍💻 Author
Venkatasai Dadigoppula

Feel free to contribute or fork!

📧 venkatasai381@gmail.com
🌐 LinkedIn
🐙 GitHub

