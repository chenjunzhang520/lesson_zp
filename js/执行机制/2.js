// V8 引擎看待这段代码？
// 编译 为什么要变量提升？
var myName; // undefined
// 函数更优先
function showName() {
    console.log('函数showName被执行');
}
showName();
console.log(myName);
myName = 'chen';