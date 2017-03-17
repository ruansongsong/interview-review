exports.name='b';

let a = require('./a');

console.log(`b.js => a.name === '${a.name}'`);
console.log(`b.js => a.date === '${a.date}'`);

setTimeout(() => console.log(`b.js (1 sec afeter) => a.date === '${a.date}'`), 1000);

exports.date = 'b-date';
