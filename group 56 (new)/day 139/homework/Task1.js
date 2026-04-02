const os = require("os");

process.argv.forEach(arg => {
  console.log(arg);
});

console.log("platform:", process.platform);
console.log("OS Name:", os.type());
console.log("OS Version:", os.release());
console.log("total Memory:", os.totalmem());
console.log("free Memory:", os.freemem());
console.log("home Directory:", os.homedir());
console.log("system Uptime:", os.uptime());

console.log("this is a normal message");
console.warn("this is a warning message");
console.error("this is an error message");

const data = [
  { name: "user1", age: 6 },
  { name: "user2", age: 7 }
];

console.table(data);