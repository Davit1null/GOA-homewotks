// 1
//ls -l

// 2
//clear

// 3
//# Press: Ctrl + L

// 4
//cd

// 5
//cd ~/Documents

// 6
//cd ..

// 7
//echo 'console.log("Hello Node");' > app.js
//node app.js

// 8
//node -v

// 9
//mkdir projects

// 10
//echo "test file" > test.txt
//rm test.txt

// 11
const nums1 = [-3, 0, 4, -2];
console.log(nums1.some(n => n > 0));

// 12
const nums2 = [1, 3, 5, 8];
console.log(nums2.some(n => n % 2 === 0));

// 13
const strings = ["hi", "hello", "amazing", "cat"];
console.log(strings.some(s => s.length > 5));

// 14
const mixed = [1, "hello", false, null];
console.log(mixed.some(val => !val));

// 15
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
const nums3 = [4, 6, 8, 11];
console.log(nums3.some(isPrime));

// 16
const arr = [10, 20, 30];

// 17
arr.forEach(el => console.log(el));

// 18
arr.forEach((val, index) => console.log(`Index: ${index}, Value: ${val}`));

// 19
const sum = arr.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

// 20
const strings2 = ["apple", "banana"];
strings2.forEach(s => console.log(s.toUpperCase()));

// 21
const people = [{ name: "Alice" }, { name: "Bob" }];
people.forEach(person => console.log(person.name));

// 22
const nums4 = [1, 2, 3, 4];
const squares = nums4.map(n => n * n);
console.log(squares);

// 23
const doubled = nums4.map(n => n * 2);
console.log(doubled);

// 24
const lowercase = ["dog", "cat"];
const uppercased = lowercase.map(s => s.toUpperCase());
console.log(uppercased);

// 25
const people2 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];
const names = people2.map(p => p.name);
console.log(names);

// 26
const increased = nums4.map(n => n + 10);
console.log(increased);
