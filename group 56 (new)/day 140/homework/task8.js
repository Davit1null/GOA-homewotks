const buffer = Buffer.from("Hello");

console.log("before:", buffer.toString());

buffer[0] = 74;
buffer[1] = 97;

console.log("after:", buffer.toString());