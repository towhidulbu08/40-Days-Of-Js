//1. Odd or Even?
//  Take a number and find if the number is an odd or even number.
//  Print the number and result in the console

//solution 1:

// let a = 4;
// let result = a % 2 === 0 ? "Even" : "Odd";

// console.log(a, result);

// 2. Do you have a Driving License?
// Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.

//  Manage age as a variable.
//  Check if the age is elligible for a driving license and print it on the console accordingly.

//sol-02:

// let age = 19;
// let check = age >= 18 ? "elligible" : "not elligible";

// console.log(age, check);

// 3. Calculate CTC with a Bonus
// Let's calculate how much you earn from your office.

//  You get 12,300 rupees as your monthly salary.
//  You get a 20% bonus on your annual salary.
//  How much money do you make per annum as a CTC?

// let salary = 12300;
// let annual_Salary = 12300 * 12;
// let bonus = (20 / 100) * annual_Salary;

// let totalMoney = annual_Salary + bonus;
// console.log("salary", salary);
// console.log("annual_salary", annual_Salary);
// console.log("bonus", bonus);
// console.log(totalMoney);

// 4. Write a program for the Traffic Light Simulation.
// Red Light... Green Light... Let's Play!

//  Create a color variable.
//  Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.

//sol-04:

// const color = ["red", "green"];

// const showConsole = color.includes("red") ? "STOP" : "GO";

// console.log(showConsole);

//  05.Create a units variable. Based on this value you will calculate the total electricity bill for a months.
//  If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?
//  If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?

//sol-05:
// let units = 5;
// let dailyBill = units * 150;

// const monthyCost = dailyBill * 30;

// const annualCost = monthyCost * 12;

// const discountAmount = annualCost * (20 / 100);

// const annulChargedAfterDiscount = annualCost - discountAmount;

// console.log("dailyBill", dailyBill);
// console.log("monthlyBill", monthyCost);
// console.log("annualCost", annualCost);
// console.log("discountAmount", discountAmount);
// console.log("annualBillAfterDiscount", annulChargedAfterDiscount);

//06: Leap Year Checker:

// let year = 2000;

// let checker =
//   (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
//     ? "Leap Year"
//     : "Not Leap Year";

// console.log("check leap year:", checker);

//7.Max Of Three Numbers:

// let p, q, r;
// p = 3;
// q = 3;
// r = 2;
// let findMax =
//   p === q && p === r
//     ? "All Are Equal"
//     : p > q && p > r
//       ? "P is Largest"
//       : q > p && q > r
//         ? "Q is Largest"
//         : "R is Largest";

// console.log("Find Max:", findMax);

let bit = 5;

/**
 5/2=2(1)
 2/2=1(0)
 1/2=0(1)
 ********
 10/2=5(0)
 5/2=2(1)
 2/2=1(0)
 1/2=0(1)
 10=1010
101
 */
