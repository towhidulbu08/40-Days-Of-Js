//1. What will be the output of this code snippet and why?
// let day = "Monday";

// switch (day) {
//   case "Monday":
//     console.log("It's the start of the week.");
//    break;
//   case "monday":
//     console.log("It's the start of the week.");
//     break;
//   default:
//     console.log("It's a normal day.");
// }
//2. Build an ATM Cash Withdrawal System

// let input = Number(prompt("enter amount: "));

// if (input % 100 === 0) console.log("Withdrawal Successful");
// else console.log("Invalid amount");

//3. Build a Calculator with switch-case

// let operator = prompt("Enter Operator: ");
// let a = 3;
// let b = 2;
// switch (operator) {
//   case "+":
//     console.log("sum: ", a + b);
//     break;
//   case "-":
//     console.log("subtraction: ", a - b);
//     break;
//   case "*":
//     console.log("multiply: ", a * b);
//     break;

//   default:
//     console.log("division: ", a / b);
// }

//4. Pay for your movie ticket

let Age = Number(prompt("Enter Your Age: "));

if (Age < 18) {
  console.log("Price:", 3);
} else if (Age >= 18 && Age <= 60) {
  console.log("Price:", 10);
} else if (Age > 60) {
  console.log("Price:", 8);
}
