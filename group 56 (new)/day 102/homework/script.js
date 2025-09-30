// 1
function randomDecimal() {
  return Math.random();
}

// 2
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// 3
function flipCoin() {
  return Math.random() < 0.5 ? "Heads" : "Tails";
}

// 4
function generatePassword() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < 8; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
}

// 5
function randomBoolean() {
  return Math.random() < 0.5;
}

// 6
const todayDate = new Date().getDate();

// 7
const birthday = new Date("2025-10-05").getDate();

// 8
const isFirst = todayDate === 1;

// 9
const todayWeekday = new Date().getDay();

// 10
const birthdayWeekday = new Date("2025-10-05").getDay();

// 11
const isSunday = todayWeekday === 0;

// 12
const currentYear = new Date().getFullYear();

// 13
const birthdayYear = new Date("2025-10-05").getFullYear();

// 14
const isYear2025 = currentYear === 2025;

// 15
const currentMinute = new Date().getMinutes();

// 16
const someMinute = new Date("2025-10-05T14:30:00").getMinutes();

// 17
const isStartOfHour = currentMinute === 0;
