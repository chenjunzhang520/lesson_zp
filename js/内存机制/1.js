// 调用栈在栈内存中
// 体积小
function foo() {
    var a = 1; // 赋值
    var b = a; // 拷贝
    a = 2;
    console.log(a); // 2
    console.log(b); // 1
}
foo();
