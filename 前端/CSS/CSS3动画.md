# CSS3 动画
## CSS Transition 动画
过渡动画，当某个元素的 css 属性发生变化时，CSS Transition 能控制其变化的速率，比如鼠标 hover 改变颜色 

### 属性
`transition: property duration timing-function delay;`
- transition-property	规定设置过渡效果的 `CSS 属性`的名称。
- transition-duration	规定完成过渡效果需要多少秒或毫秒。
- transition-timing-function	规定速度效果的速度曲线。
- transition-delay	定义过渡效果何时开始。
```css
.box {
  background: red;
  transition: background 2s;
}
.box:hover {
  background: #000;
}
```
### transition的使用注意
- 目前，各大浏览器（包括IE 10）都已经支持无前缀的transition，所以transition已经可以很安全地不加浏览器前缀。
- 不是所有的CSS属性都支持 transition，完整的列表查看这里，以及具体的效果。
- transition 需要明确知道，开始状态和结束状态的具体数值，才能计算出中间状态。比如，height从0px变化到100px，transition 可以算出中间状态。但是，transition没法算出0px到auto的中间状态，也就是说，如果开始或结束的设置是height: auto，那么就不会产生动画效果。类似的情况还有，display: none到block，background: url(foo.jpg)到url(bar.jpg)等等。
### transition的局限
transition的优点在于简单易用，但是它有几个很大的局限。
- transition `需要事件触发`，所以没法在网页加载时自动发生。
- transition 是`一次性的`，不能重复发生，除非一再触发。
- transition 只能定义`开始状态`和`结束状态`，不能定义中间状态，也就是说只有两个状态。
- 一条 transition 规则，只能定义一个属性的变化，不能涉及多个属性。
## CSS Animation
CSS Animation 使用 `@keyframes` 可以自定义动画
```css
div:hover {
  animation: rainbow 1s;
}
@keyframes rainbow {
  0% {
    background: red;
  }
  50% {
    background: green;
  }
  100% {
    background: red;
  }
}
```
### 属性
- animation-name	规定需要绑定到选择器的 keyframe 名称。。
- animation-duration	规定完成动画所花费的时间，以秒或毫秒计。
- animation-timing-function	规定动画的速度曲线。
- animation-delay	规定在动画开始之前的延迟。
- animation-iteration-count	规定动画应该播放的次数。
- animation-direction	规定是否应该轮流反向播放动画。
