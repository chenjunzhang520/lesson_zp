let name = "123";
function showName() {
    console.log(name); // undefined
    if (false) {  // 块级作用域
        let name = "456";
    }
}
showName();