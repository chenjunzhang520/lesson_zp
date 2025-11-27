// 特殊的地方
function foo() {
    var myName = "极客时间";
    let text1 = 1;
    const text2 = 2;
    var innerBar = {
        getName: function () {
            console.log(text1);
            return myName;
        },
        setName: function (name) {
            myName = name;
        }
    }
    // return 可以被外部访问
    return innerBar;// 闭包形成的条件函数嵌套函数
}

var bar = foo();// 出栈
// bar 
// 里面的变量要回收吧?  不会回收
bar.setName("极客邦");// setname的上下文
bar.getName();
console.log(bar.getName());