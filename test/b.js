// var obj = {};
// obj.log = console.log;
// obj.log.call(console,this);

// console.log(this);
// var x = new Boolean(false);
// if (x) {
//   console.log(x);
//   console.log('hi');
// }
// var y = Boolean(0);
//   console.log(y);
// if (y) {

//   console.log('hello'); 
// }

// var a = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// console.log(Object.keys(a));
// console.log(myFunc());
// var foo='foo';
// var bar='bar';
// function myFunc() {
// return foo+bar;
// }

// demo02
// console.log('golb1');

// setTimeout(function() {
//     console.log('timeout1');
//     process.nextTick(function() {
//         console.log('timeout1_nextTick');
//     })
//     new Promise(function(resolve) {
//         console.log('timeout1_promise');
//         resolve();
//     }).then(function() {
//         console.log('timeout1_then')
//     })
// })

// setImmediate(function() {
//     console.log('immediate1');
//     process.nextTick(function() {
//         console.log('immediate1_nextTick');
//     })
//     new Promise(function(resolve) {
//         console.log('immediate1_promise');
//         resolve();
//     }).then(function() {
//         console.log('immediate1_then')
//     })
// })

// process.nextTick(function() {
//     console.log('glob1_nextTick');
// })
// new Promise(function(resolve) {
//     console.log('glob1_promise');
//     resolve();
// }).then(function() {
//     console.log('glob1_then')
// })

// setTimeout(function() {
//     console.log('timeout2');
//     process.nextTick(function() {
//         console.log('timeout2_nextTick');
//     })
//     new Promise(function(resolve) {
//         console.log('timeout2_promise');
//         resolve();
//     }).then(function() {
//         console.log('timeout2_then')
//     })
// })

// process.nextTick(function() {
//     console.log('glob2_nextTick');
// })
// new Promise(function(resolve) {
//     console.log('glob2_promise');
//     resolve();
// }).then(function() {
//     console.log('glob2_then')
// })

// setImmediate(function() {
//     console.log('immediate2');
//     process.nextTick(function() {
//         console.log('immediate2_nextTick');
//     })
//     new Promise(function(resolve) {
//         console.log('immediate2_promise');
//         resolve();
//     }).then(function() {
//         console.log('immediate2_then')
//     })
// })

// process.nextTick(function() {
//   console.log('a');
// })
// process.nextTick(function() {
//   console.log('b');
// })
// setImmediate(function() {
//   console.log('c');
//   process.nextTick(function() {
//     console.log('d');
//   })
// })
// setImmediate(function() {
//   console.log('e');
// })
// console.log(233);

function fn() {
    console.log('this is test.')
}
var timer =  setTimeout(fn, 1000);
console.log(timer);
