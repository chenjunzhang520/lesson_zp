var globalVar = "我是全局变量";
function myFunction() {
    var localVar = "我是局部变量";
    console.log(globalVar);
    console.log(localVar);
    
}
myFunction();
console.log(globalVar);
console.log(localVar);
