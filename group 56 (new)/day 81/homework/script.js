// 1
let num1 = 1;
do {
  console.log(num1);
  num1++;
} while (num1 <= 5);

// 2
let num2 = 2;
do {
  if (num2 % 2 === 0) console.log(num2);
  num2++;
} while (num2 <= 10);

// 3
let num3 = 10;
do {
  console.log(num3);
  num3--;
} while (num3 >= 1);

// 4
let userInput;
do {
  userInput = parseInt(prompt("Enter a number greater than 100:"));
} while (userInput <= 100 || isNaN(userInput));
console.log("You entered:", userInput);
const numbers = [1, 2, 3, 4, 5];
const nameArray = ['Alice', 'Bob', 'Charlie'];

// 5
for (const num of numbers) {
  console.log(num);
}

// 6
const str = "Hello";
for (const char of str) {
  console.log(char);
}

// 7
let sum = 0;
for (const num of numbers) {
  sum += num;
}
console.log("Total sum:", sum);

// 8
for (const num of numbers) {
  if (num % 2 === 0) console.log("Even:", num);
}

// 9
for (const name of nameArray) {
  console.log(name);
}

// 10
let num4 = 1;
let total = 0;
do {
  total += num4;
  num4++;
} while (num4 <= 10);
console.log("Sum from 1 to 10 is:", total);
const person = {
  name: 'Alice',
  age: 25,
  city: 'New York'
};

// 11
for (const key in person) {
  console.log("Key:", key);
}

// 12
for (const key in person) {
  console.log("Value:", person[key]);
}

// 13
let count = 0;
for (const key in person) {
  count++;
}
console.log("Number of properties:", count);

// 14
const targetKey = 'age';
let found = false;
for (const key in person) {
  if (key === targetKey) {
    found = true;
    break;
  }
}
console.log(`Does key "${targetKey}" exist?`, found);

// 15
let keysString = '';
for (const key in person) {
  keysString += key + ', ';
}
keysString = keysString.slice(0, -2);
console.log("All keys:", keysString);

