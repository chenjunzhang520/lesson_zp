const stack = [];

// 入栈
stack.push(1);
stack.push(3);
stack.push(2);
stack.push(5);
stack.push(4);

// 访问栈顶元素
const peek = stack[stack.length - 1];
console.log(peek);

// 出栈
const pop = stack.pop();
// 栈的长度
const size = stack.length;
// 栈是否为空
const isEmpty = stack.length === 0;

