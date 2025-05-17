
# 🧠 JavaScript: Hoisting & Scoping Deep Dive

## 🔄 Hoisting

**Hoisting** is JavaScript’s default behavior of moving declarations to the top of the current scope (script or function).  
- `var` declarations are hoisted and initialized with `undefined`.
- `function` declarations are hoisted with their entire body.
- `let` and `const` are hoisted but stay in the **Temporal Dead Zone** until they are initialized.

### 📌 Example 1: Function Hoisting

```js
console.log(getName); // Logs the full function
console.log(x);       // undefined

getName();            // Hello

var x = 7;
function getName() {
    console.log("Hello");
}
```

### 📌 Example 2: Reference Error

```js
console.log(a); // ❌ ReferenceError: a is not defined
```

## 🌐 Execution Contexts & Scope

Each time a function is invoked, a new **Execution Context** is created.

### 📌 Example

```js
var x = 1;

a(); // Logs 10
b(); // Logs 100

console.log(x); // Logs 1

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}
```

### 🔍 Breakdown:
- Global `x` is `1`
- Inside `a()`, `x` is `10`
- Inside `b()`, `x` is `100`

## 🌍 Global vs Function Scope

```js
var a = 10;

function b() {
    var x = 10;
}

b();

console.log(window.a); // 10 (in browser)
console.log(a);        // 10
console.log(this.a);   // 10
```

### ❌ Reference Error

```js
console.log(x); // ❌ ReferenceError: x is not defined
```

## 🆚 Undefined vs Not Defined

### ✅ `undefined`

```js
var a;
console.log(a); // undefined

a = 10;
console.log(a); // 10

a = "hello world";
console.log(a); // "hello world"
```

> ❗ Never do `a = undefined` — it’s bad practice.

### Better Check:
```js
if (typeof a === "undefined") {
    // Safe check
}
```

### ❌ `not defined`

```js
console.log(c); // ❌ ReferenceError: c is not defined
```

| Case                       | Declared | Assigned | Access Result     |
|---------------------------|----------|----------|-------------------|
| `var a;`                  | ✅       | ❌       | `undefined`       |
| `let b;`                  | ✅       | ❌       | `undefined`       |
| `const c;`                | ✅       | ❌       | ❌ SyntaxError     |
| `var x = undefined;`      | ✅       | ✅       | `undefined`       |
| `console.log(notDeclared)`| ❌       | ❌       | ❌ ReferenceError  |

## ⏳ Temporal Dead Zone (TDZ)

```js
console.log(a); // ❌ ReferenceError
console.log(b); // undefined
console.log(y); // ❌ ReferenceError

let a = 10;
var b = 100;
```

> `let` and `const` live in TDZ until they are initialized.

## ♻️ Redeclaration & Reassignment

### ✅ `var` allows both:
```js
var z = 100;
var z = 200;
```

### ❌ `let` can't be redeclared:
```js
let h = 10;
// let h = 20; ❌ SyntaxError
```

### ❌ `const` can't be reassigned or uninitialized:
```js
const k = 10;
k = 100; // ❌ TypeError

// const c; ❌ SyntaxError: Must be initialized
```

### ✅ `let` reassignment:

```js
let p = 30;
p = 40;
console.log(p); // 40

let q;
q = 50;
console.log(q); // 50
```

## 📌 Summary

- `var` is **function-scoped** and hoisted with `undefined`.
- `let` and `const` are **block-scoped**, hoisted but not initialized (TDZ).
- Functions are hoisted with body intact.
- Accessing undeclared variables causes **ReferenceError**.
- `this === window` is `true` in global scope (browser).
