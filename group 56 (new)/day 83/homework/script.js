// 1
const filterPositives = (arr) => {
  for (const num of arr) {
    if (num < 0) continue;
    console.log(num);
  }
};

filterPositives([-2, 5, 0, -1, 3, -9]);
// 2
const findLongWord = (words) => {
  for (const word of words) {
    if (word.length > 5) {
      console.log("First word over 5 letters:", word);
      break;
    }
  }
};

findLongWord(["dog", "apple", "giraffe", "cat"]);
// 3
const sumUntilNegative = (arr) => {
  let sum = 0;
  for (const num of arr) {
    if (num < 0) break;
    sum += num;
  }
  console.log("Sum before negative:", sum);
};

sumUntilNegative([2, 4, 6, -1, 5]);
// 4
const skipMultiplesOf3 = () => {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
  }
};

skipMultiplesOf3();
// 5
const countWordsStartingWithA = (words) => {
  let count = 0;
  for (const word of words) {
    if (word.length < 1) continue;
    if (word[0].toLowerCase() === 'a') {
      count++;
    }
  }
  console.log("Words starting with A/a:", count);
};

countWordsStartingWithA(["Apple", "banana", "apricot", "cherry", ""]);
// 6
const skip4and6 = () => {
  for (let i = 1; i <= 30; i++) {
    if (i % 4 === 0 || i % 6 === 0) continue;
    console.log(i);
  }
};

skip4and6();
// 7
const findLongName = (names) => {
  for (const name of names) {
    if (name.length > 8) {
      console.log("First name > 8 chars:", name);
      break;
    }
  }
};

findLongName(["Tom", "Stephanie", "Alexander", "Jo"]);
// 8
const printOdds = (arr) => {
  for (const num of arr) {
    if (num % 2 === 0) continue;
    console.log("Odd:", num);
  }
};

printOdds([1, 2, 3, 4, 5, 6, 7]);
// 9
const sumPositiveEvens = (arr) => {
  let total = 0;
  for (const num of arr) {
    if (num <= 0 || num % 2 !== 0) continue;
    total += num;
  }
  console.log("Sum of positive even numbers:", total);
};

sumPositiveEvens([1, 2, -4, 6, -2, 8]);
