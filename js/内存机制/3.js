// JS 是动态弱类型语言
var bar; 
console.log(typeof bar);
// undefined 调用栈执行上下文里顺手就存了
bar = 12; // number
console.log(typeof bar);
bar = "极客时间";
console.log(typeof bar);
bar = true;
console.log(typeof bar);
bar = null;
console.log(typeof bar); // Object JS设计的 bug
bar = {name:"极客时间"}; // Object 
// Object.prototype.toString.call()
console.log(typeof bar);


