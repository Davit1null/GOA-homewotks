// 1
let fruits = ["apple", "banana", "mango", "orange", "grape"];

console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);
console.log("Total number of fruits:", fruits.length);
// 2
let colors = ["red", "green", "blue"];

colors.push("yellow");             
colors.shift();                    
colors.unshift("purple");          
console.log("Final colors array:", colors);
// 3
let numbers = [2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2);
}
// 4
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

console.log(sumArray([1, 2, 3])); // Output: 6
// 5
function findLargest(arr) {
  let largest = arr[0];
  for (let num of arr) {
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
}

console.log(findLargest([4, 9, 2, 7, 5]));
// 6
let favoriteMovies = ["Inception", "Interstellar", "The Matrix", "Gladiator", "Titanic"];
let userMovie = prompt("Enter a movie name:");

if (favoriteMovies.includes(userMovie)) {
  alert("Yes, it's one of my favorites!");
} else {
  alert("No, I don't like that one much.");
}
// 7
let words = ["banana", "apple", "pear", "orange"];

words.sort();
let result = words.join(", ");

console.log(result);
// 8
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

console.log(getRandomNumber());
// 9
let num = parseFloat(prompt("Enter a decimal number:"));

console.log("Rounded down:", Math.floor(num));
console.log("Rounded up:", Math.ceil(num));
console.log("Rounded to nearest:", Math.round(num));
// 10
let nums = [45, 12, 88, 3, 27];

let max = Math.max(...nums);
let min = Math.min(...nums);

console.log("Maximum:", max);
console.log("Minimum:", min);



