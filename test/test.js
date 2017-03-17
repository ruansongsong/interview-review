// function a() {
// 	var b = 10;
// }
// a();
// console.log(b);
// if(true) {
// 	var a = 10;
// }
// console.log(a);
//
// var d = new Date();
//
// console.log(d.toLocaleString()); //"04.09.2016, 15:42:44"
// console.log(d.toString());
// var a = [1, 2, 3];
// console.log(a.join('-'));

// var a = new Date();
// console.log(a);
// console.log(Date.now());
// console.log(a.getFullYear());
// var a = 'abc'.replace(/b/g, "233")
// console.log(a);
// var a = 'erver'.match(/er/);
// console.log(a); // [ 'er', index: 0, input: 'erver' ]
// var b = 'erver'.match(/er/g);
// console.log(b); // [ 'er', 'er' ]
// var c = 'abcbdbr'.split(/x/);
// console.log(c); // [ 'a', 'c', 'd', 'r' ]
// var reg = /b/g;
// console.log(reg.exec('abcbyybh')); // [ 'b', index: 1, input: 'abcbyybh' ]
// console.log(reg.exec('abcbyybh')); // [ 'b', index: 3, input: 'abcbyybh'
// console.log(reg.exec('abcbyybh')); // [ 'b', index: 6, input: 'abcbyybh' ]
// // console.log(reg.exec('abcbyybh')); // null
// var a = /a+/;
// var b = /a?/
// var str = 'aaab';
// console.log(str.match(a));
// console.log(str.match(b));
// var reg = /\b(?:[01]?[0-9]|2[0-3]):[0-5][0-9]\b/;
// console.log('现在是09:49点'.match(reg));	// ["09:49"]
// var a = 's3e#%rw';
// console.log(escape(a));
// var a = Math.floor(Math.random() * 9 + 2);
// console.log(a)
// con
// function Person() {

// }
// Person.prototype.name = "songsong";
// Person.prototype.age = 21;
// Person.prototype.sayName = function() {
//     console.log(this.name);
// }
// let p1 = new Person();
// let p2 = new Person();
// p1.sayName(); // songsong
// p2.sayName(); // songsong
// console.log(Person.prototype.isPrototypeOf(p1));
// console.log(Object.getPrototypeOf(p1) == Person.prototype);
// function Person() {

// }
// // let p1 = new Person(); 不能写在前面,这样会切断构造函数和最初原型之间的联系
// Person.prototype = {
//     // constructor: Person, 可以这样设置，若不设置constructor 属性指向Object构造函数
//     name: "songsong",
//     age: 21,
//     sayName: function() {
//         console.log(this.name);
//     }
// }
// let p1 = new Person();
// p1.sayName();
// function Person(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
// }
// Person.prototype = {
//     constructor: Person,
//     sayName: function() {
//         console.log(this.name);
//     }
// }
// let p1 = new Person('songsong', 21, 'frontend');
// let p2 = new Person('song', 21, 'backend');
// p1.sayName(); // songsong
// p2.sayName(); // song

// function SuperType() {
//     this.superValue = true;
// }
// SuperType.prototype.getSuperValue = function() {
//     return this.superValue;
// }

// function SubType() {
//     this.subValue = false;
// }
// SubType.prototype = new SuperType();
// SubType.prototype.getSubValue = function() {
//     return this.subValue;
// }
// let s = new SubType();
// console.log(s.getSuperValue());
// function SuperType() {
//     this.colors = ['red', 'blue'];
// }

// function SubType() {
//     SuperType.call(this)
// }
// let instance1 = new SubType();
// instance1.colors.push('black');
// console.log(instance1.colors) // [ 'red', 'blue', 'black' ]
// let instance2 = new SubType();
// console.log(instance2.colors); // [ 'red', 'blue' ]

// function SuperType(name) {
//     this.name = name;
//     this.colors = ['red', 'blue'];
// }
// SuperType.prototype.sayName = function() {
//     console.log(this.name);
// }

// function SubType(name, age) {
//     SuperType.call(this, name);
//     this.age = age;
// }
// SubType.prototype = new SuperType();
// SubType.prototype.constructor = SubType;
// SubType.prototype.sayAge = function() {
//     console.log(this.age);
// }
// let instance1 = new SubType('songsong', 21);
// instance1.colors.push('black');
// console.log(instance1.cofunction SuperType(name) {
//     this.name = name;
//     this.colors = ['red', 'blue'];
// }
// SuperType.prototype.sayName = function() {
//     console.log(this.name);
// }… * [ 'red', 'blue', 'black' ]
//  * songsong
//  * 21
//  * [ 'red', 'blue' ]
//  * song
//  * 18 
//  * */lors);
// instance1.sayName();
// instance1.sayAge()
// let instance2 = new SubType('song', 18);
// console.log(instance2.colors);
// instance2.sayName();
// instance2.sayAge();
/** 
 * [ 'red', 'blue', 'black' ]
 * songsong
 * 21
 * [ 'red', 'blue' ]
 * song
 * 18 
 * */
// function a() {
//     let n = 2;

//     function b() {
//         console.log(n);
//     }
//     return b;
// }
// let c = a();
// c(); // 输出 2
// function makeAdd(x) {
//     return function(y) {
//         return x + y;
//     }
// }
// let makeAdd2 = makeAdd(2);
// let makeAdd3 = makeAdd(3);
// console.log(makeAdd2(10)); // 12
// console.log(makeAdd3(10)); // 13
// function a() {
//     var result = [];
//     for (var i = 0; i < 10; i++) {
//         result[i] = function() {
//             return i;
//         }
//     }
//     return result;
// }
// console.log(a()[1]()); // 10 ，所有的输出都是10
// 10

// function b() {
//     let result = [];
//     for (let i = 0; i < 10; i++) {
//         result[i] = function() {
//             return i;
//         }
//     }
//     return result;
// }
// console.log(b()[1]()); // 0 1 2 3 4 5

// function c() {
//     let result = [];
//     for (let i = 0; i < 10; i++) {
//         result[i] = i;
//     }
//     return result;
// }
// console.log(c()); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// function d() {
//     var result = [];
//     for (var i = 0; i < 10; i++) {
//         result[i] = i;
//     }
//     return result;
// }
// console.log(d()); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// for (var i = 0; i < 10; i++) {
//     (function(j) {
//         setTimeout(function() {
//             console.log(j);
//         }, j * 1000);
//     })(i);
// }
// var name = 'window';
// var object = {
//     name: 'my object',
//     getName: function() {
//         return function() {
//             return this.name;
//         }
//     }
// }
// console.log(object.getName()())
// function foo() {
//     console.log(this.a);
// }
// var object = {
//     a: 2,
//     foo: foo
// }
// object.foo() // 2

// function foo1() {
//     console.log(this.a);
// }
// var object1 = {
//     a: 2
// }
// foo1.call(object1) // 2
// var array = [1, 1, 2, 2, 3];
// var a = array.filter(function (item, index, self) {
//     console.log(self.indexOf(item) + ":" + index);
//     return self.indexOf(item) == index;

    
// })
// console.log(a)
// console.log(Math.round(0.5))

console.log([...new Set([2, 2, 3, 4])]);
