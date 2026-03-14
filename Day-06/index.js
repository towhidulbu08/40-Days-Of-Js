// function declaration
function printHello() {
  console.log("Hello");
}

printHello();

// function expression
const printhello2 = function () {
  console.log("printHello2");
};

//rest parameters
function number(...rest) {
  console.log(rest);
}

// number(1, 2, 3, 4, 5, 6, 7, 8, 9);

//destructuring in function parameters.
function printDetails({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
//printDetails({ name: "Alice", age: 30 });

//array destructuring in function parameters
function printFirstTwo([first, second]) {
  console.log(`First: ${first}, Second: ${second}`);
}
//printFirstTwo([10, 20, 30, 40]);

//default parameters
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
// greet(); // Hello, Guest!
// greet("Alice"); // Hello, Alice!

//callback function

function foo(func) {
  console.log("foo");

  func();
}

foo(function () {
  console.log("callback function");
});

//annonymous function

//rule: if a function is not assigned to a variable or passed as an argument, it is an anonymous function.

//function declaration must have a name, so it cannot be anonymous. However, function expressions can be anonymous if they are not assigned to a variable or passed as an argument.

//Pure Functions:A pure function is a function that always produces the same output for the same input and has no side effects (it does not modify any external state).
function greeting(name) {
  return `Hello, ${name}!`;
}

console.log(greeting("Alice")); // Hello, Alice!
console.log(greeting("Alice")); // Hello, Alice!
console.log(greeting("Alice")); // Hello, Alice!

//side effect function:
let greetingMessage = "Hello";

function updateGreeting(name) {
  return greetingMessage + " " + name;
}

console.log(updateGreeting("Alice")); // Hello Alice
greetingMessage = "Hi";
console.log(updateGreeting("Alice")); // Hi Alice

//Higher-Order Functions: A higher-order function is a function that takes one or more functions as arguments or returns a function as its result.

function higherOrderFunction(func) {
  console.log("This is a higher-order function.");
  func();
}

higherOrderFunction(function () {
  console.log(
    "This is a callback function passed to the higher-order function.",
  );
});

//another example of higher-order function that returns a function:

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
const double = multiplier(2);
console.log(double(5)); // 10

//here the multiplier function is a higher-order function that returns a new function. The double variable holds the returned function, which multiplies its input by 2. When we call double(5), it returns 10.

//Arrow Functions: Arrow functions are a concise syntax for writing function expressions. They are often used for short, simple functions.

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

const addWithMultiply = (a, b) => {
  const sum = add(a, b);
  const product = multiply(a, b);
  return `Sum: ${sum}, Product: ${product}`;
};
