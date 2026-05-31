// 构造函数， 却是简单数据类型
const id1 = Symbol('');
console.log(typeof id1);
const id2 = Symbol('');
// 独一无二
console.log(id1 === id2);