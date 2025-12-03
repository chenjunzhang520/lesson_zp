# JS 中 this的设计

## 自由变量的查找
- 编译阶段
- 作用域链
- Lexical Scope 

## 如果要拿到time.geekbang.com 怎么办？
- this 
  在面向对象的方法内**应该**可以通过this 拿到对象的属性
  但是早期没有class，函数里面需要this 来完成OOP 
- js 做了一个不好的设计
  this 由函数的调用方式决定的
  - 作为普通函数被调用，this 指向全局对象 window
    this 是没有必要的， js 函数特别灵活，js作者忘了处理这种情况
    this 总有指的地方，没有必要指， js作者偷懒
    直接让js指向全局 
    var 声明的变量 会挂载到全局对象 window 上
    不好，容易导致全局变量被污染，污染了window
    let 声明的变量 不会挂载到全局对象 window 上
    严格模式也规避了没有必要的this 指向，直接报错

    - js 执行机制跟编辑阶段挂钩
    - this 是个例外，由调用方式 (执行阶段) 决定
      this是指针，指向调用它的对象 
      谁调用这个方法， this 就指向谁

## 指向上下文 来看待this

## this 指向的各种情况
- 作为对象的方法被调用， 指向对象
- 作为普通函数被调用， 指向全局对象 window ， 严格模式undefined
- call, apply 绑定this
- 构造函数 this 指向实例
- 事件处理函数 this 指向事件绑定的元素