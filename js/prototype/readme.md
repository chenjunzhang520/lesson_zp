# 原型

- 如何拿到小米su7 
  - 类 构造函数 Car
  - new Car 实例
  - **prototype** 对象上方法或属性

## 构造函数
- constructor 
  new 的方式运行这个函数， this 指向新创建的对象， 构造新对象的过程
  每个实例自己的
- prototype 对象 原型
  设置的属性和方法， 让这个类所有实例共享这些属性和方法 
  - 孔子是韩国的
  JS 面向对象是原型式的面向对象 哲学性
  - 虽然不是直接设置在实例上， 但是可以通过实例访问到
  - 何为prototype ？
    - JS 为了完成原型式的面向对象构建， 实例的属性用constructor，
      用prototype 属性来设置共有的方法和属性
      每个函数都有一个prototype 属性
    - prototype属性的值是一个对象
      它上面的属性和方法会被所有实例共享
    - 传统的class 面向对象是血缘关系的，class定义属性和方法的模板(抽象)
    实例是具体的
      js 原型式的面向对象 不是血缘的 prototype 
    - 所有的对象都有一个 __proto__ 私有属性， 指向该对象的原型
    - 原型对象上有一个constructor 属性， 指向该对象的构造函数
      由这个构造函数创建的实例，可以享用原型对象

- 任何对象都默认指向Object.prototype, 除非 new 其他的构造函数生成的
- Object.prototype 原型是null 停止查找
  null 表示没有原型对象 