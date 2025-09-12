// 1
let countdown = 10;
const countdownTimer = setInterval(() => {
  console.log(countdown);
  countdown--;
  if (countdown < 0) {
    clearInterval(countdownTimer);
    console.log("Time's up!");
  }
}, 1000);
// 2
let toggle = true;
const titleInterval = setInterval(() => {
  document.title = toggle ? "Hello" : "Goodbye";
  toggle = !toggle;
}, 1000);

setTimeout(() => {
  clearInterval(titleInterval);
}, 6000);
// 3
let position = 0;
const box = document.getElementById("box");
const moveBox = setInterval(() => {
  position += 10;
  box.style.left = position + "px";
  if (position >= 100) {
    clearInterval(moveBox);
  }
}, 200);
// 4
let count = 0;
const randomInterval = setInterval(() => {
  let num = Math.floor(Math.random() * 10) + 1;
  console.log("Random number:", num);
  count++;
  if (count === 5) {
    clearInterval(randomInterval);
  }
}, 1500);
// 5
let words = ["apple", "banana", "cherry"];
for (let i = 0; i < words.length; i++) {
  console.log(words[i].toUpperCase());
}
// 6
let numbers = [1, 2, 3];
numbers[1] = 0; 
console.log("Updated array:", numbers);
// 7
let arr = ["a", "b"];
arr.push("c");        
arr.unshift("start"); 
arr.pop();            
console.log("Final array:", arr);
// 8
let nums = [10, 20, 30, 40];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
let average = sum / nums.length;
console.log("Average:", average);
// 9
let colors = ["red", "green", "blue"];
console.log(colors[2]);
console.log(colors[1]);
console.log(colors[0]);
// 10
let items = ["apple", "banana", "cherry", "date", "fig"];
for (let i = 0; i < items.length; i++) {
  console.log(`Index ${i}: ${items[i]}`);
}
