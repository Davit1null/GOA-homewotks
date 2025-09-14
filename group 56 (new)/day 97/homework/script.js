// 1
const dateParts = "2025-08-17".split("-");
console.log(dateParts);

// 2
const words = "one two three four five".split(" ");
console.log(words);
// 3
const personData = "John,Doe,25,Developer".split(",");
console.log(personData);

// 4
const chars = "abc".split("");
console.log(chars);

// 5
const sentenceWords = "JavaScript is fun".split(" ");
console.log(sentenceWords[1]);

// 6
function startsWithHello(str) {
  return str.startsWith("Hello");
}
console.log(startsWithHello("Hello World"));

// 7
function checkImageFile(filename) {
  return filename.startsWith("img_") ? "Image file" : "Not an image file";
}
console.log(checkImageFile("img_001.png"));

// 8
function startsWithOnceUpon(sentence) {
  return sentence.startsWith("Once upon");
}
console.log(startsWithOnceUpon("Once upon a time..."));

// 9
function startsWithAt(str, substr, position) {
  return str.startsWith(substr, position);
}
console.log(startsWithAt("Hello world", "world", 6));

// 10
function countDrNames(names) {
  return names.filter(name => name.startsWith("Dr.")).length;
}
console.log(countDrNames(["Dr. Smith", "Mr. Jones", "Dr. Adams"]));

// 11
function trimString(str) {
  return str.trim();
}
console.log(trimString("   hello world   "));

// 12
function trimLeading(str) {
  return str.trimStart();
}
console.log(trimLeading("   leading space"));

// 13
function trimTrailing(str) {
  return str.trimEnd();
}
console.log(trimTrailing("trailing space   "));

// 14
function cleanUsernames(usernames) {
  return usernames.map(name => name.trim());
}
console.log(cleanUsernames([" alice ", "bob ", "   charlie"]));

// 15
function isEmptyAfterTrim(input) {
  return input.trim() === "";
}
console.log(isEmptyAfterTrim("    "));

// 16
function allStudentsPassed(students) {
  return students.every(student => student.score >= 50);
}
console.log(allStudentsPassed([
  { name: "Alice", score: 75 },
  { name: "Bob", score: 60 }
]));

// 17
function allEven(numbers) {
  return numbers.every(num => num % 2 === 0);
}
console.log(allEven([2, 4, 6, 8]));

// 18
function allValidEmails(emails) {
  return emails.every(email => email.includes("@"));
}
console.log(allValidEmails(["a@example.com", "b@site.org"]));

// 19
function allAdults(ages) {
  return ages.every(age => age >= 18);
}
console.log(allAdults([22, 35, 19]));

// 20
function allPricesBelow100(prices) {
  return prices.every(price => price < 100);
}
console.log(allPricesBelow100([45.99, 80.00, 99.99]));

