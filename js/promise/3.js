import fs from 'fs';

console.log(1);
// 异步代码
// I/O 操作
// 3.js 线程执行的时候，从硬盘的文件系统调入内存
// readFile a.txt 从内存中又去硬盘的文件系统读取a.txt
// a.txt 存的是一本三国演义
const p = new Promise((resolve,reject) => {
    console.log(3); // 同步， 立即执行
    fs.readFile('./b.txt',function(err,data){
        // console.log(err,'////////');
        if(err){
            reject(err);
            return;
        }
        // console.log(data.toString());
        // 值 结果
        resolve(data.toString()); // promise 被解决了 兑现
    })
    // 立即执行的执行函数 executor
})
p.then((data) => {
    console.log(data,'///////');
}).catch((err) => {
    console.log(err,'读取文件失败');
})
console.log(2);
