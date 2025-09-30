// 1
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("clock").innerText = `Time: ${timeString} <3`;
}

setInterval(updateClock, 1000);
updateClock();
// 2
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

console.log("Dice shows:", rollDice());
// 3
const fruits = ["Apple", "Pear", "Banana", "Peach"];

function getRandomFruit() {
  const index = Math.floor(Math.random() * fruits.length);
  return fruits[index];
}

console.log("Random fruit:", getRandomFruit());
// 4
function generatePassword() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}

console.log("Generated password:", generatePassword());
// 5
function getMonthName() {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const now = new Date();
  return months[now.getMonth()];
}

console.log("Current month:", getMonthName());
// 6
function getWeekdayName() {
  const weekdays = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
  ];
  const now = new Date();
  return weekdays[now.getDay()];
}

console.log("Today is:", getWeekdayName());
// 8
function daysUntilBirthday(birthdayStr) {
  const today = new Date();
  const currentYear = today.getFullYear();
  const birthday = new Date(`${birthdayStr}, ${currentYear}`);
  
  if (birthday < today) {
    birthday.setFullYear(currentYear + 1);
  }

  const diffTime = birthday - today;
  const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return daysLeft;
}
console.log("Days until birthday:", daysUntilBirthday("October 10"));
// 9
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

console.log("Random color:", getRandomColor());