# this
它代表函数运行时，自动生成的一个内部对象，只能在函数内部使用
## 判断 this
1. 函数在 new 中调用 `new 绑定`， this 就绑定的是新创建的的对象
```javascript
var bar = new foo();
```
2. 函数通过 call、apply `显示绑定`，this 绑定的是指定的对象
```javascript
foo.call(object);
```
3. 函数在某个上下文对象中调用， this 绑定的是那个上下文对象
```javascript
var bar = object.foo();
```
4. 如果都不是的话，使用默认绑定，如果在严格模式下，绑定到 undefined ，否则绑定到全局对象
```javascript
var bar = foo();
```
## 一些测试代码
```javascript
function foo() {
    console.log(this.a);
}
var object = {
    a: 2,
    foo: foo
}
object.foo() // 2

function foo1() {
    console.log(this.a);
}
var object1 = {
    a: 2
}
foo1.call(object1) // 2
```
