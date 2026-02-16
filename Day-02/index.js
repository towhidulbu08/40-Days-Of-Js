console.log("DAY 02");

// Variable is a container or strorage for data. It is used to store and manipulate data in a program. In JavaScript, we can declare variables using the `var`, `let`, or `const` keywords.For example: A Box is a variable that can hold different items. We can put a toy in the box, then take it out and put a book in it. The box is like a variable that can store different values.

//Variables Declaration
var name = "John"; // Using var to declare a variable
let age = 30; // Using let to declare a variable

// Ruls for naming variables in JavaScript:
// 1. Variable names must start with a letter, underscore (_), or dollar sign ($).
// 2. Variable names can contain letters, numbers, underscores, or dollar signs.
// 3. Variable names cannot start with a number.
// 4. Variable names are case-sensitive (e.g., "myVariable" and "myvariable" are different).
// 5. Variable names cannot be reserved keywords in JavaScript (e.g., "var", "let", "const", etc.).
// 6. Variable names should be descriptive and meaningful to improve code readability.

// Example of valid variable names:
var myVariable = "Hello";
let _myVariable = "World";
const $myVariable = 42;
// Example of invalid variable names:
// var 1variable = "Invalid"; // Cannot start with a number
// let my-variable = "Invalid"; // Cannot contain hyphens
// const var = "Invalid"; // Cannot use reserved keywords

//Naming Conventions:
// 1. camelCase: The first word is lowercase, and the first letter of each subsequent word is capitalized (e.g., myVariableName).
// 2. snake_case: Words are separated by underscores, and all letters are lowercase (e.g., my_variable_name).
// 3. PascalCase: The first letter of each word is capitalized (e.g., MyVariableName).
// 4. kebab-case: Words are separated by hyphens, and all letters are lowercase (e.g., my-variable-name).

//Scope and hoisting of variables:
// Scope refers to the accessibility of variables in different parts of a program. In JavaScript, there are three types of scope: global scope, function scope, and block scope.
// 1. Global Scope: Variables declared outside of any function or block have global scope and can be accessed from anywhere in the program.
// 2. Function Scope: Variables declared within a function have function scope and can only be accessed within that function.
// 3. Block Scope: Variables declared with `let` or `const` within a block (e.g., inside an if statement or loop) have block scope and can only be accessed within that block.
// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations. For example:
//console.log(myVar); // Output: undefined (due to hoisting)
var myVar = "Hello";
let myLet = "World";
//console.log(myLet); // Output: ReferenceError: Cannot access 'myLet' before initialization (let is not hoisted like var)

let address = "Bangladesh";
console.log(address);

// function myFunction() {
//   var address = "Dhaka";
//   console.log(address);
// }
// myFunction(); // Output: Dhaka

// let address = "Dhaka";
console.log(address); // Output: Bangladesh

//initialize vs assignement of variables:
// Initialization of a variable is the process of declaring a variable and assigning it an initial value at the same time. For example:
let city = "New York"; // This is initialization because we are declaring the variable 'city' and assigning it the value "New York" in one step.
// Assignment of a variable is the process of giving a value to a variable after it has been declared. For example:
let country; // This is declaration without initialization
country = "USA"; // This is assignment because we are assigning the value "USA" to the variable 'country' after it has been declared.

// undefined vs null:
// undefined is a primitive value that indicates that a variable has been declared but has not been assigned a value. For example:
let myVar;
console.log(myVar); // Output: undefined
// null is a primitive value that represents the intentional absence of any  value. It is often used to indicate that a variable should have no value. For example:
let myNullVar = null;
console.log(myNullVar); // Output: null
