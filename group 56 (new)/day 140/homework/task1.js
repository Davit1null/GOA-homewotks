const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('helloEvent', () => {
    console.log("hello event triggered!");
});

emitter.emit('helloEvent');