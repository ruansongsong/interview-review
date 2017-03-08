# JSON
JSON 是一种数据格式，很多编程语言都支持，JSON 可以表示以下 3 种类型的值。
- 简单值：不支持undefined
- 对象： 键值对
- 数组

JSON 字符串必须使用`双引号`，JSON 对象的属性必须加双引号，JavaScript 中对象的属性可加可不加。
```javascript
{
  "name": "ruansongsong",
  "age": 21,
  "school": [
    {
      "name": "233"
    },
    {
      "name": "123"
    }
  ]
}

var person = {
  name: "ruansongsong",
  age: 21
}
var person = {
  "name": "ruansongsong",
  "age": 21
}
```

## 方法
### JSON.stringfy()
将 js 对象序列化为 JSON 字符串 `JSON.stringify(value[, replacer [, space]])`,
- value
将要序列化成 JSON 字符串的值。
- replacer 可选
如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；
如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；
如果该参数为null或者未提供，则对象所有的属性都会被序列化；
关于该参数更详细的解释和示例，请参考使用原生的 JSON 对象一文。
- space 可选
指定缩进用的空白字符串，用于美化输出（pretty-print）；
如果参数是个数字，它代表有多少的空格；上限为10。改值若小于1，则意味着没有空格；
如果该参数为字符串(字符串的前十个字母)，该字符串将被作为空格；
如果该参数没有提供（或者为null）将没有空格。

### JSON.parse()
将 JSON 解析为原生 JavaScript 值,`JSON.parse(text[, reviver])`
- text
要被解析成JavaSctipt值的字符串，查看 JSON 对象学习的JSON 语法的说明。
-   reviver 可选
如果是一个函数，则规定了原始值如何被解析改造，在被返回之前。

