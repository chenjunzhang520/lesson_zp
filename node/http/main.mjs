// 服务器端代码
// node 内置的模块
import http from 'http';
// web 服务器 伺服状态 http://www.baidu.com
// 用户 chrome 请求http://www.baidu.com
// BS 架构
http.createServer((req,res)=>{
    // callback 来处理用户的请求
    // req 请求对象
    // res 响应对象
    console.log(req);
    res.end('hello world');
}).listen(3000)