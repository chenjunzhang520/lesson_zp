# deepseek-r1-webgpu

简历中的超燃项目，将覆盖一下技能
## 端侧模型
有别于OpenAI/DeepSeek API 调用，llm 在远程，和调用客户端不在一起，
- 贵
- 不安全
  context 会随着请求发送到

ollama 本地开源模型部署，在用户端，端侧模型。
手机端，汽车端， Agent 任务 划分的 
开源小参数模型就能完成这些任务。
浏览器端，随时下载，随时使用
webgpu

## React + TS
AI 时代的大型项目首选前端技术
  - react 比vue 难入门
  - 大型项目 
  - AI 训练代码 react 的偏多
  ### 新建项目
  react + ts + eslint(代码约束，大公司必备，代码风格一致)
  '' "" ; eslint 负责约束代码风格

## tailwindcss 
几乎不再需要写，原子css类，

## react 组件 
搭积木的方式搭建页面，是由一组html，css，js 组合在一起，成为一个组件，一个功能单元。
vue template script style 三明治 一个文件 vue 好入门
react?  封装一个组件(函数) 函数就是组件
  函数 返回html 就是 组件 
  函数return 之前js 部分， css?引入样式 

## tailwindcss 运行原理
- 不是原生css
- 原子类css框架，提供一堆的css类名(原子类)
- 不用写css了， 选择器，css rules 太低效果了。
- vite 插件就可以使用， 将我们声明的类名 它的样式提取出来，加到代码里
- 原子类名(英文单词)，简单，语义化很好，特别适合自然语义编程。
如果说以前的css选择器，rules(key:value;)
太底层，太低效 二进制 
写类名就好
tailwindcss 已经成为 vibe UI的基本构成

- className?
  类名class
  class js 里的类名(OOP)关键字, 函数里面写JSX
  所以不能用class，理解为你要声明一个js类。 className 没有这个问题
    
- JSX
  JSX 是 React 专用语法(模板)，能在JS代码里直接写HTML标签，编译后转为原生DOM操作
  react 最为骄傲的一大特性之一，非常方便的表达UI 界面
  javascript with xml 
  <div></div> html 特有的XML 