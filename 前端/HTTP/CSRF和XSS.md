# CSRF 和 XSS

## 比较
- CSRF : 跨站请求伪造（Cross-site request forgery），
- XSS ： 跨站脚本 (Cross-site scripting)，

## CSRF

### 完成攻击条件
1. 登录受信任网站 A ，并在本地生成 cookie；
2. 在不退出 A 的情况下，访问危险网站 B；

例如在有 cookie 的情况下访问 www.weibo.com/hehe/deletepage=30&userid=10284 就可能会删掉某个 page；
### 防御方式
1. 每个请求使用验证码，完美的方案，但是用户体验性不好
2. 在提交表单中加入随机数 token
```html
 <input type="hidden" name="token" value="{{.}}">
 
```
3. 为每个用户生成一个唯一的 `cookie token`，

## XSS
XSS 是`注入攻击`的一种，例如发表评论时，提交了含有 JavaScript 脚本的内容，如果服务器没有过滤或者转义掉这些脚本，就会作为内容发布到页面上，其他用户访问这个页面就会执行这个脚本。

### 攻击方式
```html
<input type="text", name="nick" value="xiaomao">  
<input type="text", name="nick" value=""/>  
<script>alert("haha")</script>
```

### 预防方式
1. 对用户输入的数据进行转义，例如对 html 转义
