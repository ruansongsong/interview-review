# CSS3 

## CSS3 新增特性
- `flex`
- `CSS3`盒子模型: `box-sizing` 属性,有`border-box`(元素的内边距和边框不再增加它的宽度),`content-box`
- `@font-face`:加载字体文件,可以用 url base64的形式加载,也可从服务器直接加载.
- CSS3动画:`translation`,`animation`,`transform`(拉伸,平移,旋转等)
- 其他:`rgba`,`box-shadow`,`column-count`(多列布局),渐变(gradient)等

## 新增选择器(主要)
- 属性选择器:`input[type="button"]`,^,$,*
- `:last-child`,`nth-of-type`,`first-of-type`
- `:disabled`,`:checked`,`:not(p)`,`:selection`

`:first-child` 匹配的是某父元素的第一个子元素，可以说是结构上的第一个子元素。

`:first-of-type` 匹配的是某父元素下相同类型子元素中的第一个，比如 p:first-of-type，就是指所有类型为p的子元素中的第一个。这里不再限制是第一个子元素了，只要是该类型元素的第一个就行了。
