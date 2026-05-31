# Symbol 何为？ 
- 独一无二的值
- 数据类型?
  - 简单数据类型
    - 传统
      - 数值 number
      - 布尔 boolean
      - 字符串 string
      - 空值 null
      - 未定义 undefined
    - es6
      - bigint 大数
      - symbol 符号 
  - 复杂数据类型
    object 对象

- js 总共有8种数据类型
  七上八下
  number和 bigint  numeric 

## Symbol
- 申明方式
  Symbol() 函数申明， 但是简单数据类型
  参数label 可选，描述符号的字符串

- Symbol 可以作为对象的唯一key 用于多人协作，避免命名冲突
  - 对象动态的
  - Symbol key  不会被覆盖的
  - for key in 不可以枚举
    Object.getOwnPropertySymbols()