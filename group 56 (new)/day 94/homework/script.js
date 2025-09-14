// 1
let str1 = "JavaScript";
console.log("First character:", str1.at(0));

// 2
let str2 = "OpenAI";
console.log("Last character:", str2.at(-1));

// 3
let str3 = "Programming";
console.log("5th character:", str3.at(4));

// 4
function getMiddleChar(str) {
    let midIndex = Math.floor(str.length / 2);
    return str.at(midIndex);
}
console.log("Middle character of 'me':", getMiddleChar("me"));

// 5
let str4 = "Hello World";
console.log("Second-to-last character:", str4.at(-2));

// 6
let hello = "Hello";
let world = "World";
console.log(hello.concat(world));

// 7
console.log("Good".concat(" ", "Morning"));

// 8
let age = 25;
console.log("Age: ".concat(age.toString()));

// 9
console.log("Great job".concat("!"));

// 10
console.log("Test".concat(""));

// 11
console.log("Hello World".endsWith("World"));

// 12
console.log("filename.pdf".endsWith(".pdf"));

// 13
console.log("https://example.com/".endsWith("/"));

// 14
function endsWithS(word) {
    return word.endsWith("s");
}
console.log(endsWithS("apples"));
console.log(endsWithS("apple"));

// 15
let str5 = "JavaScript";
console.log(str5.endsWith("Java", 4));
