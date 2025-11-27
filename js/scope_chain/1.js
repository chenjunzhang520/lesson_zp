function bar() {
    console.log(myName);
}
function foo() {
    var myName = '极客帮';
    bar();// 运行时 
}
var myName = '极客时间';
foo();