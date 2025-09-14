// 1
console.log("The quick brown fox jumps over the lazy dog".includes("dog"));

// 2
function containsAtSymbol(str) {
  return str.includes("@");
}

// 3
console.log("JavaScript".includes("Java"));

// 4
console.log("pineapple".includes("apple"));

// 5
function containsNot(sentence) {
  return sentence.includes("not");
}

// 6
console.log("The quick brown fox jumps over the lazy dog".indexOf("fox"));

// 7
console.log("Hello world".indexOf("o"));

// 8
console.log("Happy New Year 2025!".indexOf("2025"));

// 9
console.log("This is a simple test".indexOf("is"));

// 10
function indexOfAt(str) {
  return str.indexOf("@");
}

// 11
console.log("Hello world".lastIndexOf("o"));

// 12
console.log("banana".lastIndexOf("a"));

// 13
console.log("This is a test, and it is simple".lastIndexOf("is"));

// 14
console.log("dog dog dog".lastIndexOf("dog"));

// 15
console.log("Happy 2025, welcome 2025!".lastIndexOf("2025"));

// 16
console.log("ha".repeat(3));

// 17
console.log("*".repeat(10));

// 18
console.log("---".repeat(5));

// 19
function repeatWord(word, n) {
  return word.repeat(n);
}

// 20
console.log("Hello ".repeat(4));

// 21
console.log("The cat chased the cat".replace("cat", "dog"));

// 22
console.log("JavaScript is cool".replace("Java", "Type"));

// 23
function replaceFirstSpace(sentence) {
  return sentence.replace(" ", "-");
}

// 24
console.log("banana".replace("a", "@"));

// 25
console.log("Happy New Year 2024!".replace("2024", "2025"));

// 26
console.log("The cat chased another cat and found a cat".replaceAll("cat", "dog"));

// 27
console.log("I love JavaScript so much".replaceAll(" ", "-")); 

// 28
console.log("banana".replaceAll("a", "@"));

// 29
console.log("2024 was great, but 2024 is over".replaceAll("2024", "2025")); 

// 30
console.log("Wait. Stop. Go. Run.".replaceAll(".", "!")); 

// 31
console.log("Hello world".slice(6));

// 32
console.log("JavaScript".slice(0, 4));

// 33
console.log("Python".slice(1));

// 34
console.log("Banana".slice(-3));

// 35
function getFirstHalf(str) {
  return str.slice(0, Math.floor(str.length / 2));
}

