//1. Generate a Pyramid Pattern using Nested Loop as it is shown below:

// for (let i = 1; i <= 5; i++) {
//   let star = "";
//   for (let j = 1; j <= i; j++) {
//     star += "*";
//   }
//   console.log(star);
// }

//2. Craete Multiplication Table (Using for loop)
// let input = Number(prompt("Enter Number: "));
// for (let i = 1; i <= 10; i++) {
// console.log(`${input} X ${i} =`, input * i);
// }

//3. Find the summation of all odd numbers between 1 to 500 and print them on the console log.

// let i = 1;
// let sum = 0;
// while (i <= 500) {
//   if (i % 2 === 1) {
//     sum += i;
//   }
//   i++;
// }

//console.log("sum:", sum);

//4. Skipping Multiples of 3

let j = 1;

while (j <= 20) {
  if (j % 3 === 0) {
    j++;
    continue;
  }

  console.log("j", j);
  j++;
}
