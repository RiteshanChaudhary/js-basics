// variable => rewritable memory space  
// can be changed during program execution

// let x=2;
// x=7;

// console.log(x);

// x=9;
// console.log(x);

// const x=2; // it is a constant

// x=5;
// console.log(x);

// ? variable naming convention
// *rule 1
// 1. variable name cannot be reserved words such as let,  const, while, for, etc...
// ? bad example
// let let = 5
// let const = 5

// ? good example 
let firstName = 'Rohan';
const PI = 3.1415;

// *rule 2
// 2. variable name cannot start with numbers
// ? bad example 
// let 1x=5
// let 25abc = 9

// ? allowed 
let num1= 5;
let u2ser2 = 'rohan'; // allowed

// * rule 3
// 3. variable name cannot contain special characters such as 
// @,#,%,^, & , etc ...
// except _ and $

// ? not allowed
// let abc# = 5
// let x^d = 9

// ? allowed 
let user$ = 'abc';
let $ = 100;
let _ =9;
let first_name = 'Rohan';

// * rule 4
// 4. variable name should be descriptive

// bad example 
let t= 40; // t is temperature
let x = 2+3; // x is sum

// good example 
let temperature = 40;
let sum = 2+3;

// * rule 5
// 5. variable name should be camel case
// uppercase = FIRSTNAME
// lowercase = firstname
// camelCase = firstName, addNumbers, findOddOrEven, dateOfBirth, permanentAddress

// bad example 
let firstname;
let oddoreven;

//good example 
let firstName;
let oddOrEven;

// constant naming convention
// ? same as variable naming convention
// universal constants are written in uppercase
const PI = Math.PI;
const GRAVITY_ON_EARTH = 9.8;

// const x=5;
console.log(PI);
