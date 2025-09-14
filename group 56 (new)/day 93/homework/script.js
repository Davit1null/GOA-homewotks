// 1
let expr1 = prompt("Enter a math expression (e.g., '5+3'):");
alert("Result: " + eval(expr1));

// 2
let expr2 = prompt("Enter an expression with parentheses (e.g., '(8+2)*3'):");
alert("Result: " + eval(expr2));

// 3
let division = prompt("Enter a division (e.g., '100/4'):");
alert("Result: " + eval(division));

// 4
let num = prompt("Enter a number:");
alert("Square: " + eval(num + "*" + num));

// 5
let exp = "20 - 7";
alert("Evaluated '20 - 7': " + eval(exp));

// 6
let input = prompt("Enter something:");
if (isNaN(input)) {
    alert("Not a number");
} else {
    alert("Is a number");
}

// 7
let age = prompt("Enter your age:");
if (isNaN(age)) {
    alert("Invalid age");
} else {
    alert("Valid age");
}

// 8
let val1 = prompt("Enter first value:");
let val2 = prompt("Enter second value:");
alert("First is " + (isNaN(val1) ? "not a number" : "a number"));
alert("Second is " + (isNaN(val2) ? "not a number" : "a number"));

// 9
let anything = prompt("Type anything:");
if (isNaN(anything)) {
    alert("You entered text.");
} else {
    alert("You entered a number.");
}

// 10
let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");
let operator = prompt("Enter operator (+, -, *, /):");

if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid number input.");
} else {
    let result = eval(num1 + operator + num2);
    alert("Result: " + result);
}
// 11
let strNum = prompt("Enter a whole number as a string (e.g., '25'):");
let parsedNum = parseInt(strNum);
alert("Parsed number: " + parsedNum);

// 12
let str1 = prompt("Enter first whole number (as string):");
let str2 = prompt("Enter second whole number (as string):");
let sum = parseInt(str1) + parseInt(str2);
alert("Sum: " + sum);

// 13
let pxVal = prompt("Enter a value like '55px':");
let parsedPx = parseInt(pxVal);
alert("Extracted number: " + parsedPx);

// 14
let valA = prompt("Enter value like '20px':");
let valB = prompt("Enter value like '15.9':");
let sumParsed = parseInt(valA) + parseInt(valB);
alert("Sum of parsed values: " + sumParsed);

// 15
let hex = prompt("Enter a hexadecimal value (e.g., '0xF'):");
let parsedHex = parseInt(hex);
alert("Decimal value: " + parsedHex);
