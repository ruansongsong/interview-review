- express 完全是由`路由`和`中间件`构成的一个 web 开发框架，本质上说，一个 express 就是在调用各种中间件。
- 中间件（Middleware） 是一个`函数`，它可以访问`请求对象`（request object (req)）, `响应对象`（response object (res)）, 和 web 应用中处于请求-响应循环流程中的中间件，一般被命名为 `next 的变量`。
- `app.use()`使用中间件，将 use 中的函数按顺序加入栈中，然后通过 `next()` 方法继续调用下一个函数，如果不调用 next 或者 res.end 的话，浏览器请求就会挂起。

app.use 添加非路由中间件，app[method] 添加路由中间件

- 路由感觉也像中间件，请求方法都是动态添加的。methods是一个数组，里面存放了一系列web请求方法，以上方法通过对其进行遍历，给app添加了与请求方法同名的一系列方法

```javascript

// 定义一个空数组，存放我们所有的`中间件`
const middlewares = [];

// 定义app的use方法
app.use = function(middleware) {
    // 每次use一个新的中间件(其实就是一个函数),实际上是往middlewares数组中添加该middleware
    middlewares.append(middleware);
}

/*
    中间件的代码其实就是上面写的那么简单(当然我简化了很多，但是思想就是这么一回事)
    接下来我们来聊聊中间件是如何起作用的
*/


// 首先记住每个middleware的形式如下
function(req, res, next) {

}

// 假设现在我们有两个中间件m1, m2如下
const m1 = function(req, res, next) {
    req.m1 = 'm1';
    next();
}
const m2 = function(req, res, next) {
    res.m2 = 'm2';
    next();
}

/*
    当一个请求到来的时候
    1. 中间件机制会先执行m1函数，然后对req和res做一些操作
    2. m1执行到最后的时候会调用`next()`,在这里也就是m2,也就是说调用`next()`的时候实际上调用m2函数
    3. m2重复上面的操作，调用它之后的中间件，直到你的业务代码
    4. 通过上述中间件,你的业务代码可以获取额外的req和res的属性,也就是上面列出的req.m1和res.m2
*/

```
