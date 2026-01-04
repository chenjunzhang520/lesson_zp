# useMemo & useCallback

- react 性能优化
  - includes 方法 "" 也为true 
  - count 的改变也会让 filterList 重新执行
  - 应该避免 

- useMemo 缓存计算结果
  - 组件中有计算属性的需求 vue 给了api, react直接做
    第一个参数函数封装计算的过程
  - 有些计算是比较昂贵的 
  - 依赖项发生改变时，才会重新计算， 第二个参数 依赖数组
    