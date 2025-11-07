var str = 'hello';
str.length;
// 包装类
var strObj = new String(str);
console.log(strObj.length); 
// 释放掉
strObj = null;
console.log(typeof str);

