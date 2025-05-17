# 2667. Create Hello World Function

**Difficulty**: Easy  
**Companies**: Various

## Problem Description
Write a function `createHelloWorld` that returns a new function which always returns "Hello World" regardless of the arguments passed to it.

### Examples

**Example 1:**
```javascript
Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

Constraints
0 <= args.length <= 10

JavaScript Function Concepts with Definitions:
1. Function Syntax
Definition: The basic building block of JavaScript that encapsulates reusable code.

Basic Syntax
function f(a, b) {
    const sum = a + b;
    return sum;
}
console.log(f(3, 4)); // 7

Anonymous Function:
Definition: A function without a name, often assigned to variables or passed as arguments.

var f = function(a, b) {
    const sum = a + b;
    return sum;
}
console.log(f(3, 4)); // 7


Immediately Invoked Function Expression (IIFE):
Definition: A function that executes immediately after creation, creating private scope.

const result = (function(a, b) {
    const sum = a + b;
    return sum;
})(3, 4);
console.log(result); // 7


2. Functions Within Functions
Definition: The ability to nest functions and return them from other functions.

function createFunction() {
    function f(a, b) {
        const sum = a + b;
        return sum;
    }
    return f;
}
const f = createFunction();
console.log(f(3, 4)); // 7


3. Function Hoisting
Definition: JavaScript's behavior of moving function declarations to the top of their scope.

function createFunction() {
    return f;
    function f(a, b) {
        const sum = a + b;
        return sum;
    }
}
const f = createFunction();
console.log(f(3, 4)); // 7


4. Closures
Definition: Functions that remember their lexical scope even when executed outside it.

function createAdder(a) {
    function f(b) {
        const sum = a + b;
        return sum;
    }
    return f;
}
const f = createAdder(3);
console.log(f(4)); // 7


5. Arrow Syntax
Definition: Concise function syntax with lexical this binding.

Basic Syntax

const f = (a, b) => {
    const sum = a + b;
    return sum;
};
console.log(f(3, 4)); // 7

Omit Return:
Definition: Implicit return for single-expression arrow functions.

const f = (a, b) => a + b;
console.log(f(3, 4)); // 7


6. Rest Arguments
Definition: Syntax (...) that collects all remaining arguments into an array.

function f(...args) {
    const sum = args[0] + args[1];
    return sum;
}
console.log(f(3, 4)); // 7


7. Higher-Order Functions
Definition: Functions that operate on other functions by taking them as arguments or returning them.

function log(inputFunction) {
    return function(...args) {
        console.log("Input", args);
        const result = inputFunction(...args);
        console.log("Output", result);
        return result;
    }
}
const f = log((a, b) => a + b);
f(1, 2); // Logs: Input [1, 2] Output 3


Solutions

Function Syntax Solution:
/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function() {
        return "Hello World";
    }
};

Arrow Syntax Solution
/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return () => "Hello World";
};


Arrow Syntax + Rest Arguments Solution

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return (...args) => "Hello World";
};


Key Concepts Explanation
Higher-Order Functions: The solution demonstrates creating a function (createHelloWorld) that returns another function, making it higher-order.

Closure: The returned function maintains access to its lexical scope (though in this simple case, it doesn't use any external variables).

Function Variations: Shows different syntax options (traditional, arrow, with rest parameters) for solving the same problem.

Argument Handling: Illustrates how to handle variable arguments (though the solution intentionally ignores them).

Related Topics
Functions: The basic unit of execution in JavaScript

Higher-Order Functions: Functions that work with other functions

Closures: The combination of a function and its lexical environment

Arrow Functions: Concise function syntax

Rest Parameters: Handling variable numbers of arguments

JavaScript Basics: Fundamental programming concepts