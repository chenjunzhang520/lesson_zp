// 坚持一种风格（用那种引号就那种，被混着用），遵守公司代码风格
let str = "hello world";
let str2 = 'hello world';
//es6 模板字符串
// 其他大型语言都有字符串模板功能，js 不在去拼接了，
let w = 'world';
let str4 = "hello" + w;// es5
let str3 = `hello ${w}`;// er6
//String string
// 字符串对象
console.log(str2, str, 6);
let str5 = new String("abc");
console.log(str5);
console.log(str5, typeof str5,
    typeof str4,
    str5.valueOf(),
    Object.prototype.toString.call(str5)
);
// 为什么
console.log(str4.length, str5.length);