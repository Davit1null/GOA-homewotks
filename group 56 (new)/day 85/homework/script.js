// 1
function printAllArgs() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(`Arg ${i + 1}:`, arguments[i]);
  }
}

// 2
function countArgs() {
  console.log("Total arguments:", arguments.length);
}

// 3
function sumNumericArgs() {
  let sum = 0;
  for (let arg of arguments) {
    if (typeof arg === "number") sum += arg;
  }
  console.log("Sum of numeric arguments:", sum);
}

// 4
function stopAtZero() {
  for (let arg of arguments) {
    if (arg === 0) break;
    console.log(arg);
  }
}

// 5
function printOnlyNumbers() {
  for (let arg of arguments) {
    if (typeof arg === "string") continue;
    console.log(arg);
  }
}
// 6
const multiply = function(a, b) {
  return a * b;
};

console.log("3 x 4 =", multiply(3, 4));

// 7
setInterval(function() {
  console.log("This logs every 2 seconds");
}, 2000);

// 8
const button = document.createElement('button');
button.textContent = "Click Me!";
document.body.appendChild(button);

button.addEventListener('click', function() {
  alert("Button was clicked!");
});
// 9
function localScopeTest() {
  let localVar = "I'm local!";
  console.log("Inside function:", localVar);
}
localScopeTest();
// 10
(function() {
  console.log("Hello, world!");
})();

// 11
(function(num) {
  console.log(`Square of ${num} is`, num * num);
})(5);

// 12
(function(arr) {
  let total = 0;
  for (let num of arr) total += num;
  console.log("Sum of array elements:", total);
})([1, 2, 3, 4, 5]);

// 13
function outerFunction() {
  let count = 0;
  console.log("Before inner function:", count);

  function innerFunction() {
    count += 5;
  }

  innerFunction();
  console.log("After inner function:", count);
}
outerFunction();

// 14
function scopeTest() {
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
  console.log("var a:", a);
}

scopeTest();
