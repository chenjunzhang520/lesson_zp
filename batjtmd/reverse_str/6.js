const arr = [1,2,3,4,5,6];
// reducer 函数
// acc 之前的计算结果
// cur 是当前这一项
const total = arr.reduce((acc, cur) => {
    console.log(acc, cur);
    return acc + cur;
}, 0); //  0 initialValue 初始值
console.log(total);

function reverseStr(str) {
    // str 字符数组？
    // reduce 数组推平为一个
    return [...str].reduce((reversed, char) => char + reversed, '')
}

console.log(reverseStr('hello'));