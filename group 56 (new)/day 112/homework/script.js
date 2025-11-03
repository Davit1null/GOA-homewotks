// 1
const num = 7;
const result = num % 2 === 0 ? "Even" : "Odd";
console.log(result);

// 2
const a = 10, b = 25;
const greater = a > b ? a : b;
console.log("Greater number:", greater);

// 3
const age = 17;
const eligibility = age >= 18 ? "Eligible" : "Not Eligible";
console.log("Voting status:", eligibility);

// 4
const score = 72;
const grade = score >= 50 ? "Pass" : "Fail";
console.log("Grade:", grade);

// 5
const number = -3;
const type = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
console.log(type);

// 6
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log("Merged Array:", merged);

// 7
const user = { name: "david", age: 15 };
const updatedUser = { ...user, age: 16 };
console.log("Original:", user);
console.log("Updated:", updatedUser);

// 8
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log("Sum:", sum(1, 2, 3, 4, 5));

// 9
const person = { name: "david", age: 15, city: "Tbilisi", country: "Georgia" };

const { name, ...rest } = person;

console.log("Name:", name);
console.log("Other info:", rest);

// 10
export function greet(name) {
  console.log(`Hello, ${name}!`);
}

// 12
import { greet } from './greet.js';

greet("david");

// 13
export const PI = 3.14159;

export function area(radius) {
  return PI * radius * radius;
}

export function circumference(radius) {
  return 2 * PI * radius;
}

// 14
import { PI, area, circumference } from './mathUtils.js';

console.log("PI =", PI);
console.log("Area =", area(5));
console.log("Circumference =", circumference(5));



