# getJSON 

- ajax 与 fetch 相比
  - fetch 简单易用， 基于 Promise 实现(then), 无需回调函数
  - ajax 基于回调函数实现， 代码复杂
- 如何**封装一个**getJSIN 函数， 使用ajax 支持promise
  - get 请求方法
  - 返回是JSON
  - ajax thenable

## Promise
- Promise 类， 为异步变同步而（流程控制） 实例化， 事实标准
- 接收一个函数， 函数接受两个参数， 分别为 resolve 和 reject
- then, catch 两个方法
  - promise 实例 最初状态为 pending 等待
  - resolve() 成功， 状态为 fulfilled， then执行
  - reject() 失败， 状态为 rejected， catch执行

## 引用式拷贝
- JS 变量内存分为栈内存和堆内存
  - JS 编译阶段 执行阶段
  变量提升， 为这些变量分配内存
  - 栈内存 简单数据类型 值
    对象变量 引用地址
      连续的 块
  - 堆内存 对象
    离散
