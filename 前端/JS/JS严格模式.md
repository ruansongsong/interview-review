## JS严格模式
ES5引入的
```javascript
"use strict";
```
# 严格模式作用
将代码中出现的问题直接转化为错误，JavaScript在更严格的条件下运行，主要是更便于调试，严格模式下会抛出更多的错误

# 开启严格模式
可以为script标签、函数开启，但一般不要再全局下开启，因为有可能合并代码会出现意想不到的错误。

# 严格模式的一些改变
1. 全局变量必须显示说明
```javascript
x = a; // 这样会报错，var x = a;
```
2. 禁止使用`with`
3. 禁止`this`关键字指向全局对象
4. 函数声明必须在顶层
```javascript
　　"use strict";
　　if (true) {
　　　　function f() { } // 语法错误
　　}
　　for (var i = 0; i < 5; i++) {
　　　　function f2() { } // 语法错误
　　}
```
4. 禁止在函数内部遍历调用栈
```javascript
　　function f1(){
　　　　"use strict";
　　　　f1.caller; // 报错
　　　　f1.arguments; // 报错
　　}
　　f1();
```
5. 不能重名
```javascript
　　"use strict";
　　var o = {
　　　　p: 1,
　　　　p: 2
　　}; // 语法错误
　　"use strict";
　　function f(a, a, b) { // 语法错误
　　　　return ;
　　}
```
6. 增加了一些保留字，例如`let`等
