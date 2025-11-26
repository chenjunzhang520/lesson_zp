// 执行上下文的角度，var/let 融合
function foo() {
    var a = 1;
    let b = 2;
    {
        let b = 3;  // 维护一个栈
        var c = 4;
        let d = 5;
        console.log(a);
        console.log(b);  
    }
    console.log(b);
    console.log(c);
    console.log(d);
}
foo();