// scope

// var let const

// block scope

// function scope

// const helloWorld = () => {
//   var x = 1;
//   let y = 2;
//   const z = 3;
//   console.log(x, y, z);
// };
// console.log(x);

//lexical scope

const lexicalScope = () => {
  const x = "outer";
  //   console.log(y)
  const child = () => {
    const y = "inner";
    console.log(x);
  };
  child();
};
lexicalScope();
