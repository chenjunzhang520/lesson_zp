for (let i = 0; i < 10; i++) {
    // i 他自己的词法环境
    // 块级作用域
    setTimeout(function() {
        // 函数作用域
        console.log(i);
    }, 1000);
} 