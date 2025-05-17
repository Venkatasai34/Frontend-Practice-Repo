
# 🧠 JavaScript Hoisting & Scope – Quick Guide

## 📘 Index
1. [Hoisting Basics](#1-hoisting-basics)
2. [Function vs. Variable Hoisting](#2-function-vs-variable-hoisting)
3. [Scope & Execution Context](#3-scope--execution-context)
4. [Global vs. Function Scope](#4-global-vs-function-scope)
5. [undefined vs. not defined](#5-undefined-vs-not-defined)
6. [Let & Const: Temporal Dead Zone](#6-let--const-temporal-dead-zone)
7. [Comparison Table](#7-comparison-table)
8. [Best Practices](#8-best-practices)

---

## 1. 🏗 Hoisting Basics

**Hoisting** is JavaScript's default behavior of moving declarations to the top of the scope (during memory phase).

```js
console.log(x); // undefined
var x = 7;
```

🔹 JS allocates memory for `var x` and sets it to `undefined` before code execution.

---

## 2. 🔁 Function vs. Variable Hoisting

```js
console.log(getName); // [Function: getName]
getName();            // Hello
console.log(x);       // undefined

var x = 7;
function getName() {
  console.log("Hello");
}
```

| Type     | Hoisted | Initialization | Access Before Init |
|----------|---------|----------------|---------------------|
| `var`    | ✅ Yes  | `undefined`    | ✅ Allowed (logs `undefined`) |
| Function | ✅ Yes  | Full Body       | ✅ Allowed           |

---

## 3. ⚙️ Scope & Execution Context

Every function call creates a new **Execution Context** with its own **Lexical Environment**.

```js
var x = 1;

function a() {
  var x = 10;
  console.log(x); // 10
}

function b() {
  var x = 100;
  console.log(x); // 100
}

a(); // 10
b(); // 100
console.log(x); // 1
```

📌 Local variables shadow global ones. Each function has its own `x`.

---

## 4. 🌍 Global vs. Function Scope

```js
var a = 10;
function test() {
  var x = 20;
}
console.log(window.a); // 10
console.log(this.a);   // 10
console.log(a);        // 10
console.log(x);        // ❌ ReferenceError
```

🔹 `var` in global scope becomes a property of the global object (`window` in browsers).

---

## 5. ❓ `undefined` vs. `not defined`

```js
var a;
console.log(a); // undefined

a = 10;
console.log(a); // 10

console.log(b); // ❌ ReferenceError: b is not defined
```

| Case                 | Declared | Assigned | Result         |
|----------------------|----------|----------|----------------|
| `var a;`             | ✅       | ❌       | `undefined`    |
| `let b;`             | ✅       | ❌       | `undefined`    |
| `const c;`           | ✅       | ❌       | ❌ SyntaxError |
| `console.log(x);`    | ❌       | ❌       | ❌ ReferenceError |

---

## 6. ⚠️ Let & Const: Temporal Dead Zone

```js
console.log(a); // ❌ ReferenceError
console.log(b); // undefined

let a = 10;
var b = 20;
```

- **Temporal Dead Zone (TDZ):** Time between hoisting and initialization for `let`/`const`.
- Variables in TDZ throw ReferenceError if accessed.

---

## 7. 📊 Comparison Table

| Feature              | `var`      | `let`       | `const`     |
|----------------------|------------|-------------|-------------|
| Scope                | Function   | Block       | Block       |
| Hoisted              | ✅ Yes     | ✅ Yes       | ✅ Yes       |
| Init in TDZ          | ✅ Yes     | ❌ No        | ❌ No        |
| Redeclaration        | ✅ Allowed | ❌ Error     | ❌ Error     |
| Reassignment         | ✅ Yes     | ✅ Yes       | ❌ No        |
| Global Object Bind   | ✅ Yes     | ❌ No        | ❌ No        |

---

## 8. ✅ Best Practices

- 🧼 Always declare variables at the top of their scope.
- ❌ Avoid using `var`, prefer `let` and `const`.
- 🔒 Use `const` for values that shouldn’t change.
- ⚠️ Never assign `undefined` manually (`a = undefined` is bad practice).
- 🛡 Check undeclared variables using `typeof`:

```js
if (typeof a === "undefined") {
  // Safe check
}
```
