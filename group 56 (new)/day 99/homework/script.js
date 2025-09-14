// 1
const strings = ["cat", "Apple", "dog", "Ant"];
console.log(strings.find(s => s.startsWith("A")));

// 2
const users = [{name: "Amy", age: 25}, {name: "Bob", age: 35}, {name: "Eve", age: 28}];
console.log(users.find(user => user.age > 30));

// 3
const words = ["small", "big", "amazing", "toy"];
console.log(words.find(w => w.length > 5));

// 4
const products = [{name: "Book", price: 25}, {name: "Pen", price: 5}];
console.log(products.find(p => p.price < 20));

// 5
const students = [{name: "Jake", grade: "B"}, {name: "Lily", grade: "A"}];
console.log(students.find(s => s.grade === "A"));
// 6
const numbers = [5, 3, -1, 7];
console.log(numbers.findIndex(n => n < 0));

// 7
const strings2 = ["play", "running", "talk"];
console.log(strings2.findIndex(s => s.endsWith("ing")));

// 8
const users2 = [{isActive: false}, {isActive: true}, {isActive: false}];
console.log(users2.findIndex(u => u.isActive));

// 9
const nums = [3, 7, 20, 13];
console.log(nums.findIndex(n => n % 10 === 0));

// 10
const fruits = ["apple", "banana", "peach"];
console.log(fruits.findIndex(f => f.length === 5));

// 11
const nums2 = [50, 101, 80, 150];
console.log([...nums2].reverse().find(n => n > 100));

// 12
const words2 = ["hat", "tree", "sun", "apple"];
console.log([...words2].reverse().find(w => w.includes("e")));

// 13
const users3 = [{age: 30}, {age: 22}, {age: 28}];
console.log([...users3].reverse().find(u => u.age < 25));

// 14
const nums3 = [2, 4, 7, 10, 3];
console.log([...nums3].reverse().find(n => n % 2 !== 0));

// 15
const words3 = ["car", "elephant", "dog", "owl"];
console.log([...words3].reverse().find(w => /^[aeiou]/i.test(w)));

// 16
const nums4 = [30, 60, 40, 70];
console.log(nums4.map((n, i) => [n, i]).reverse().find(([n]) => n > 50)[1]);

// 17
const strings3 = ["Sam", "John", "Steve", "Bob"];
console.log(strings3.map((s, i) => [s, i]).reverse().find(([s]) => s.startsWith("S"))[1]);

// 18
const users4 = [{isActive: false}, {isActive: true}, {isActive: false}, {isActive: true}];
console.log(users4.map((u, i) => [u, i]).reverse().find(([u]) => u.isActive)[1]);

// 19
const nums5 = [5, 6, 10, 15];
console.log(nums5.map((n, i) => [n, i]).reverse().find(([n]) => n % 3 === 0)[1]);

// 20
const words4 = ["tree", "sun", "moon", "wind"];
console.log(words4.map((w, i) => [w, i]).reverse().find(([w]) => w.length === 4)[1]);

// 21
const arr1 = [10, 25, 30];
console.log(arr1.indexOf(25));

// 22
const fruits2 = ["banana", "apple", "cherry"];
console.log(fruits2.indexOf("apple"));

// 23
const letters = ["b", "a", "c", "d"];
console.log(letters.indexOf("a"));

// 24
const animals = ["dog", "cat", "fish"];
console.log(animals.indexOf("cat"));

// 25
const arr2 = [10, 20, 30];
console.log(arr2.indexOf(100));

// 26
const nums6 = [10, 20, 10, 30];
console.log(nums6.lastIndexOf(10));

// 27
const fruits3 = ["apple", "banana", "apple"];
console.log(fruits3.lastIndexOf("apple"));

// 28
const letters2 = ["b", "a", "c", "a"];
console.log(letters2.lastIndexOf("a"));

// 29
const animals2 = ["dog", "cat", "dog"];
console.log(animals2.lastIndexOf("dog"));

// 30
const nums7 = [1, 0, -1, 0];
console.log(nums7.lastIndexOf(0));

// 31
const nums8 = [1, 2, 3];
console.log(nums8.pop());

// 32
const fruits4 = ["apple", "banana", "cherry"];
console.log(fruits4.pop());

// 33
let arr3 = [1, 2, 3];
while (arr3.length > 0) {
  console.log(arr3.pop());
}

// 34
const users5 = [{name: "A"}, {name: "B"}];
console.log(users5.pop());

// 35
let arr4 = [5, 6, 7];
let last = arr4.pop();
console.log(last);

// 36
let arr5 = [1, 2, 3, 4];
arr5.splice(0, 2);
console.log(arr5);

// 37
let fruits5 = ["apple", "banana", "cherry"];
fruits5.splice(2, 0, "orange", "grape");
console.log(fruits5);

// 38
let fruits6 = ["apple", "banana", "cherry", "peach"];
fruits6.splice(3, 1, "mango");
console.log(fruits6);

// 39
let arr6 = [1, 2, 3, 4, 5, 6];
arr6.splice(-3);
console.log
