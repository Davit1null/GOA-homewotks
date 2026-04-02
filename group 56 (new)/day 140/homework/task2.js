const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('messageEvent', (msg, num) => {
    console.log("message:", msg);
    console.log("number:", num);
});

emitter.emit('messageEvent', "hello from event", 42);