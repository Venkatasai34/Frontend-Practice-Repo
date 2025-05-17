// let and const declarations are hoisted
// these are in the temporal dead zone for the time being.

console.log(a); // ref error can't access a before initialization
console.log(b); // undefined
console.log(y); // ref error : y is not undefined
let a = 10;
var b = 100;

// Memory was assigned to b to the var declaration and this var b was attached to the global object.
// But in case of let and const , they are allocated memory but stored in a diff memory space than global object,
// you can't access this memory space ( these let and const declarations) before you put in some value in them.

// Temporal dead zone : is the time since when this let variable was hoisted and till it is intitialised some value.
// whenerver you try to access a variable inside the temporal dead zone , it gives you ref error cant access before initialisation

// how to avoid temporal dead zone ? always put your declaratiobns and initialisations on the top of the scope


//we can re-declare & re-assign values using var 
var z = 100;
var z = 200;


// we cant re-delcare the let and const

let h = 10;
// let h = 20; => syntax error : identifer 'h' has already been declared.


// we can't re-assign values using const
const k = 10;
k = 100; // type error : assignment to const value;
// const c; syntax error: missing intitalizer in const declaration
// const must be initialised at the time of declaration., if you dont want to change the value after, use const


let p = 30;
p = 40; 
console.log(p); // 40

let q;
q= 50; // let can be initialsed after also 
console.log(q); // 50

