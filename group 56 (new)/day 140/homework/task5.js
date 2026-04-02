const buffer = Buffer.alloc(10);

buffer.write("hello");

console.log(buffer);
console.log(buffer.toString());