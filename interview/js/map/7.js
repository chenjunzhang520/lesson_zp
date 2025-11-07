let str = "hello";
// slice 支持 负数索引  从后往前
console.log(str.slice(-3,-1)); // "ll"
// substring 不支持负数索引 ， -3 会被自动转换为 0
console.log(str.substring(-3,-1));
console.log(str.slice(3,1));
// 自动把小的当起点，大的当终点
console.log(str.substring(3,1));
console.log(str.indexOf('l'));
console.log(str.indexOf('o'));
console.log(str.lastIndexOf('l'));

