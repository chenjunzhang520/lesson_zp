// node 的内置模块 join, resolve 区别
import path from 'path';
// join  路径拼接 简陋 正确性
console.log(path.join('a', 'b', 'c'));
// 根目录， src/ , assets/ 静态资源 
console.log(path.join(process.cwd(), '/hello','world'));
console.log(path.resolve(process.cwd(), '/hello','world'));
console.log(path.resolve('a', 'b', 'c'));
console.log(path.resolve('/hello','world','./a','b'));
console.log(path.join('/hello','world','./a','b'));
console.log(path.resolve('/hello','world','../a','b'));
