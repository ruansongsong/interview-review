
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
