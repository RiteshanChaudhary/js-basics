// {}Object literals
// const person = {
//   name: "John",
//   age: 30,
//   greet: function () {
//     console.log("Name is " + this.name);
//   },
// };
// console.log(person.greet());

// Object.freeze(person)
// Object.seal(person)

// Using Constructor

// const person = new Object();
// person.name = "John";
// person.age = 30;

// console.log(person.name);

const car = {
  name: "Mercedes",
  color: "Red",
  cost: 100000,
};

// Object.freeze(car);
// car.name = "Hyundai";
// console.log(car);

Object.seal(car);
car.name = "Hyundai";
car.tyre = 4;
console.log(car);

console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));
