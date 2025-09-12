// 1
let count = 1;
const counter = setInterval(() => {
  console.log(count);
  if (count === 5) {
    clearInterval(counter);
  }
  count++;
}, 1000);
// 2
const messageInterval = setInterval(() => {
  console.log("Hello every 2 seconds");
}, 2000);

setTimeout(() => {
  clearInterval(messageInterval);
}, 10000);
// 3
let bgCount = 0;
const colors = ["lightblue", "lightgreen", "lightcoral", "lightgoldenrodyellow", "lavender"];

const colorInterval = setInterval(() => {
  document.body.style.backgroundColor = colors[bgCount % colors.length];
  bgCount++;
  if (bgCount === 5) {
    clearInterval(colorInterval);
  }
}, 3000);
// 4
const timeInterval = setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleTimeString());
}, 1000);

setTimeout(() => {
  clearInterval(timeInterval);
}, 15000);
// 5
let seconds = 0;
const timer = setInterval(() => {
  seconds++;
  console.log("Timer:", seconds, "second(s)");
  if (seconds === 10) {
    clearInterval(timer);
  }
}, 1000);
// 6
let numbers = [10, 20, 30, 40];
console.log("Second element:", numbers[1]);
// 7
numbers[0] = 100;
console.log("Updated array:", numbers);
// 8
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
// 9
let nums = [5, 10, 15, 20, 25];
let sum = nums[0] + nums[nums.length - 1];
console.log("Sum of first and last:", sum);

