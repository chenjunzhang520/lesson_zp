function reverseStr(str) {
    // 字符串split 切割成字符数组
    // 数组可以反转
    // 数组join 拼接成字符串
    // return str.split('').reverse().join('');
    return [...str].reverse().join('');
}
console.log(reverseStr('hello')); 
