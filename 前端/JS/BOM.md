# BOM (浏览器对象模型)
## window 对象
BOM 的核心对象是 window ，它表示浏览器的一个实例，也是 Global 对象，在网页中定义的任何一个对象、函数和变量，都以 window 作为其 Global 对象，因此有权访问 parseInt() 等方法。

## 窗口关系及框架
如果页面中包含框架，则每个框架都拥有自己的 window 对象，并且保存在 frames 集合中, `window.frames` ，最好通过 top 来引用这些框架
```html
<html>
<frameset cols="25%,50%,25%">
  <frame src="a.html" name="a" />
  <frame src="b.html" name="b" />
  <frame src="c.html" name="c" />
</frameset>
</html>
```
可以通过 top[a]、top[b] ... 来访问

## 窗口位置
- screenLeft/screenX 属性：窗口相对于`屏幕`左边的位置
- screenTop/screenY 属性：窗口相对于`屏幕`上边的位置

moveTo() 和 moveBy() 可以将浏览器移动到响应位置，但是在浏览器中被禁用了

## 窗口大小
- innerWidth/innerHeight 属性：返回浏览器`页面视图容器`大小
- outerWidth/outerHeight 属性：返回浏览器`窗口`大小
- offsetWidth/offsetHeight 属性： 对象内容的可视宽度
- offsetWidth/offsetHeight 属性： clientWdith 长度加上滚动条边线宽度
- scrollWidth/scrollHeight 属性： 对象内容的实际长度，若没有滚动条，则等于 clientWdith

## 导航和打开窗口
```javascript
var windowObjectReference = window.open(strUrl, strWindowName, [strWindowFeatures]);
```

## 系统对话框
- `alert()`：接受一个字符串并显示给用户
- `confirm()`：显示确认和取消，返回 true 或 false ，然后再执行接下来的操作
- `prompt()`：提示用户输入，接受两个参数：提示的信息，输入框默认值，返回用户输入的值

## location 对象
location 对象是最有用的 BOM 对象之一，提供了与当前窗口中加载的文档有关的信息，还提供了一些导航功能。 window.location 和 document.location 引用的是同一个对象。

### 属性
- location.href：包整个URL的一个DOMString
- location.protocol ：包含URL对应协议的一个DOMString，最后有一个":"。
- location.host ：包含了域名的一个DOMString，可能在该串最后带有一个":"并跟上URL的端口号。
- location.hostname ：包含URL域名的一个DOMString。
- location.port ：包含端口号的一个DOMString。
- location.pathname ：包含URL中路径部分的一个DOMString，开头有一个“/"。
- location.search ： 包含URL参数的一个DOMString，开头有一个“?”。
- location.hash ：包含块标识符的DOMString，开头有一个“#”。
- location.username ：包含URL中域名前的用户名的一个DOMString。
- location.password ：包含URL域名前的密码的一个 DOMString。

### 方法
- location.assign()：
加载给定URL的内容资源到这个- location对象所关联的对象上。
- location.reload()：
重新加载来自当前 URL的资源。他有一个特殊的可选参数，类型为 Boolean，该参数为true时会导致该方法引发的刷新一定会从服务器上加载数据。如果是 false或没有制定这个参数，浏览器可能从缓存当中加载页面。
- location.replace()
：用给定的URL替换掉当前的资源。与 assign() 方法不同的是用 replace()替换的新页面不会被保存在会话的历史 History中，这意味着用户将不能用后退按钮转到该页面。

## navigator 对象
比如获取地理位置，userAgent 等属性

## history 对象
history 对象保存着用户上网的历史记录，history.go() 可以实现浏览器前进和后退

## 呈现引擎
Gecko 是 Firefox 的呈现引擎，webkit 是 Safari 和 chrome 的呈现引擎，2013年4月3日，Google宣布它创建了WebKit中WebCore组件的分支——Blink，Blink将用于新版Google Chrome与Opera。Trident 则是 IE 呈现引擎
