// for(var i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000 * i);
// }
// for(var i = 0; i < 5; i++) {
//   (function (i) {
//     setTimeout(function() {
//       console.log(i);
//     }, 1000 * i);
//   })(i)
// }

// const EventEmitter = require('events');

// let emitter = new EventEmitter();

// emitter.on('myEvent', () => {
//   console.log('hi 1');
// });

// emitter.on('myEvent', () => {
//   console.log('hi 2');
// });

// // emitter.emit('myEvent');
// const EventEmitter = require('events');

// let emitter = new EventEmitter();

// emitter.on('myEvent', () => {
//   console.log('hi');
//   emitter.emit('myEvent');
// });

// emitter.emit('myEvent');
// con
// console.log(process);
var obj = {};  
console.log(obj);  
obj.foo = 'bar';  
