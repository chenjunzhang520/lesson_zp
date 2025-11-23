// 递归
// 函数自己调用自己 
// reverseStr reverseStr 
// 大的问题，交给小(类似)的问题 整个字符串反转   
// hello ello 完成了反转 ello h
// oll eh  o 
function reverseStr(str) {
    // 退出条件
    if(str === "") 
    {
        return "";
    }else {
        // 第二个字符到最后
        return reverseStr(str.substr(1)) + str.charAt(0);        
    }
    // reverseStr(str[0..str.length - 2]) + str[0]
}
console.log(reverseStr('hello world'));
