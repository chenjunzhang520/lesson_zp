# react 闭包陷阱
- 闭包形成条件
  - 函数组件嵌套了定时器、时间处理函数等 
  - useEffect([为空]) useCallback 闭包 词法作用域链 产生闭包陷阱