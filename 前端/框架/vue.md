# Vue 知识点
一个前端框架

## 特点
1. 数据绑定：比如更改一个输入框 input 标签的值，会`自动同步更新`到页面上其他绑定该输入框的值
2. 组件化： 页面上小到一个按钮都可以是一个单独的文件 .vue ，这些小组件可以互相引用而组装起来。

### webpack
前端资源模块化管理和打包工具。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。

### vue-cli
用来生成模板的 vue 工程，脚手架

### 命令
```bash
vue init webpack-simple test
// 安装 vue 路由模块 vue-router 和网络请求模块 vue-resource
cnpm install vue-router vue-resource –save
```
## 目录结构说明
- assets: 一般存放图片等资源
- dist： 为开发目录
- App.vue 是主要的，一般都在 components 目录下开发组件，然后引用这些组件

一个 `.vue` 就代表一个文件模块文件，每个 `.vue` 文件都包括 `<template>`， `<script>`, `<style>` ，然后 `vue-loader` 就会解析这些文件，然后把 `<template>`， `<script>`, `<style>` 这些解析到其他 `loader`

我们需要在指定 `lang` 属性来指定解析
```html
<style lang="sass">
  /* write SASS! */
</style>
```
