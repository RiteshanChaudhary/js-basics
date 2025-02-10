// hoisting

// console.log(x);
// var x = 1;
// console.log(x);

// function greet() {
//   console.log("Hello World");
// }
// greet();

// let hoisting

// let x = 10;
// console.log(x);

// Closures
// function outer() {
//   var x = 1;
//   function inner() {
//     console.log(x);
//   }
//   x = 100;
//   inner();
// }
// outer();

// function outer(a) {
//   function inner(b) {
//     console.log(a * b);
//   }
//   inner(2);
// }
// outer(3);

const bankOperation = (initialBalance) => {
  let balance = initialBalance;
  return {
    deposit(amount) {},
  };
};
