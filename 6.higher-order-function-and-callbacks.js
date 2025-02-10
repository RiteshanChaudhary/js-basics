const first = () => {
  return (a, b) => {
    console.log(a + b);
  };
};

const second = first();

second(1, 2);

const higherOrder = (callback) => {
  callback();
};

const greet = () => {
  console.log("hello");
};

higherOrder(greet);
