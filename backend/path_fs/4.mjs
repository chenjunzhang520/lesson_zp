import fs from 'fs/promises';
// es6 es8 
// 回调地狱 无法忍受
// then 链式调用 爬楼梯  也烦
// es8 async/await 语法糖
// 立即执行函数 IIFE 
// 异步的 他只是语法糖 不是 fs.readFileSync
// await 帮我们实现了流程控制， 不需要手动处理then链式
// 同步 -> js单线程，耗时性任务(block) -> 异步(event loop) 
// -> callback(回调) -> 流程控制业务复杂 (回调地狱) -> promise + then (略显复杂) -> async/await(es8 语法糖)
// 异步代码同步化 (可读性)，本质还是promise，异步中的微任务
// setTimeout  宏任务
(async () => {
    // console.log('111');
    const data1 = await fs.readFile('./file1.txt', 'utf-8');
    console.log('file1', data1);
    const data2 = await fs.readFile('./file2.txt', 'utf-8');
    console.log('file2', data2);
    const data3 = await fs.readFile('./file3.txt', 'utf-8');
    console.log('file3', data3);
})()
// fs.readFile('./file1.txt', 'utf-8')
//     .then(data => { // callback 优雅 then 语义 好理解
//         console.log('file1', data);
//         // promise 实例
//         // then 返回的promise, 继续then 链式调用
//         return fs.readFile('./file2.txt', 'utf-8');
//     })
//     .then(data => {
//         console.log('file2', data);
//         return fs.readFile('./file3.txt', 'utf-8');
//     })
//     .then(data => {
//         console.log('file3', data);
//     })

// 解决回调地狱
