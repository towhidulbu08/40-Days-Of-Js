console.log("Day-03");

// Operators: Symbols(+, -, *, /, %) that perform operations on operands (values and variables).

// 1. Arithmetic Operators: +, -, *, /, % (modulus), ** (exponentiation)
let a = 10;
let b = 5;
console.log("Addition:", a + b); // 15

// 2. Assignment Operators: =, +=, -=, *=, /=, %=
let c = 20;
c += 5;
console.log("After += 5:", c); // 25

// 3. Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
console.log("Is a equal to b?", a == b); // false
// 4. Logical Operators: && (AND), || (OR), ! (NOT)
let x = true;
let y = false;
console.log("x AND y:", x && y);
// 5. Bitwise Operators: &, |, ^, ~, <<, >>, >>>
let m = 5;
let n = 3;
console.log("Bitwise AND:", m & n);
// 6. Ternary Operator: condition ? exprIfTrue : exprIfFalse
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote?", canVote);
// 7. Typeof Operator: typeof
console.log("Type of a:", typeof a);

// 8. Unary Operators: +, -, ++, --, !
let count = 0;
count++;
console.log("Count after increment:", count); // 1

// 9. Spread Operator: ...
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log("Combined Array:", arr2); // [1, 2, 3, 4, 5]
// 10. Nullish Coalescing Operator: ??
let value = null;
let defaultValue = "Default";
console.log("Value or Default:", value ?? defaultValue); // "Default"

// 11. Optional Chaining Operator: ?.
let obj = { name: "Alice", address: { city: "Wonderland" } };
console.log("City:", obj.address?.city); // "Wonderland"
console.log("Country:", obj.address?.country); // undefined

//Operands: Values or variables on which operators perform operations. For example, in the expression a + b, a and b are operands.

//Exression: A combination of operators and operands that produces a value. For example, a + b is an expression that produces the sum of a and b.
let num1 = 5;
let num2 = 10;
let sum = num1 + num2;
console.log("Sum:", sum); // 15

// Statement: A complete line of code that performs an action. For example, console.log("Hello") is a statement that prints "Hello" to the console.
console.log("This is a statement.");

//Expression vs Statement: An expression produces a value, while a statement performs an action. For example, num1 + num2 is an expression that produces a value, while console.log(num1 + num2) is a statement that performs the action of printing the sum to the console.
// an expression can be part of a statement, but a statement cannot be part of an expression. For example, let result = num1 + num2 is a statement that contains the expression num1 + num2.but num1 + num2 cannot contain the statement let result = num1 + num2.

//Preincrement: The operator ++ before a variable increments the variable's value by 1 First then return the incremented value. For example, if x is 5, then ++x will first increment x to 6 and then return 6.

//Postincrement: The operator ++ after a variable returns the variable's current value first and then increments the variable's value by 1. For example, if x is 5, then x++ will return 5 first and then increment x to 6.

let increment = 5;
console.log("Preincrement:", ++increment);

let postIncrement = 5;
console.log("Postincrement:", postIncrement++);
console.log("Value after postincrement:", postIncrement);
