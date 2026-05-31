// JS 内部调用utf-16 编码，存储， 常规字符用16位来表示一个单位
// emoji 和一些生僻字 占据 2个甚至更多的单位。
console.log('a'.length);
console.log('中'.length);
// emoji
console.log("𝄞".length);

const str = " Hello, 世界! 👋  "
console.log(str.length);
console.log(str[1]);
console.log(str.charAt(1) ,str.charAt(1) == str[1]);
console.log(str.slice(1,6));
console.log(str.substring(1,6));



