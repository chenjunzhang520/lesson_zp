// node 服务器端代码
// node 内置的http 模块
// require 模块化机制  node 早期的 commonjs 模块机制 旧的
// 大型项目中，分目录(mvc)，分文件(类)，不可能只是一个文件
// js 前端早期是没有模块化的  esm 才有 2015年 任务简单
// import esm 
// no module -> node (全栈,commonjs) -> es6(esm 升级)
const http = require('http'); // commonjs 
const url = require("url"); // url

// 数据
const users = [
    {
        id:1,
        name:"张三",
        email:'123@qq.com'
    }
    ,
    {
        id:2,
        name:"李四",
        email:'456@qq.com'
    }
    ,
    {
        id:3,
        name:"王五",
        email:'789@qq.com'
    }
]

function generateUserHTML(users) {
    // 模板字符串 由数据驱动的？ 
    const userRows = users.map(user => 
        `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
        </tr>
        `
    ).join('');
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>User List</title>
        <style>
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
            th { background-color: #f4f4f4; }
        </style>
    </head>
    <body>
        <h1>Users</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                ${userRows}
            </tbody>
        </table>
    </body>
    </html>
    `
}
// req 用户请求
// res 响应对象
// http 是基于请求响应的简单协议
const server = http.createServer((req,res) => {
    const parsedUrl = url.parse(req.url,true);
    // console.log(parsedUrl);
    if(parsedUrl.pathname === '/' || parsedUrl.pathname === '/users') {
        res.statusCode = 200; // 响应头 状态码
        res.setHeader('Content-Type','text/html;charset=utf-8'); // 响应头 内容类型
        const html = generateUserHTML(users);
        res.end(html); // 响应体
    }else {
        res.statusCode = 404;
        res.setHeader('Content-Type','text/plain');
        res.end('404 Not Found');
    }
})
// server 伺服状态
server.listen(1234,() => {
    console.log("服务器启动成功");
})