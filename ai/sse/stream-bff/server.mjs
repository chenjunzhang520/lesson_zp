import * as dotenv from 'dotenv';
// node 最常用且简单的开发框架
// vite 启动的http server , 服务于前端的  5173 
// 5173 前端 -》 3000 BFF 后端 -》 deepseek 
// 前端发送请求到BFF层 享受服务 web server  后端 私服状态 3000 
// http server 
import express from 'express';
// 让我们的key 更安全
// 纯前端， 右键看代码， 
// fetch -> bff (apiKey)   
dotenv.config({
  path: ['.env.local', '.env']
});

const app = express(); // server app 
const port = 3000;
// 路由 
app.get('/', (req, res) => {
  // 不断地流式输出 
  res.send('Hello World!'); // 一次性发送 
})
// 流式输出的bff层 让前端调用
app.get('/stream', async (req, res) => {
  // prompt req 解析
  // fetch  deepseek  stream:true
  // llm 
  // console.log(req.query.request);
  // res.json({
  //   prompt: req.query.prompt,
  // })
  const { prompt } = req.query;
  const endpoint = 
    'https://api.deepseek.com/v1/chat/completions';
  
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': 
          `Bearer ${process.env.VITE_DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-v4-flash',
        stream: true,
        messages: [{ role: 'user', content: prompt}]
      })
    })
    console.log(response.body) // ReadableStream
  } catch(err) {

  }
})

app.listen(port, () => {
  console.log(`服务器在${port}端口启动了`);
})

// console.log(process.env.VITE_DEEPSEEK_API_KEY)
// llm 请求 bff 来
// 后端轻量的 就这一个文件 服务器端
// npm run dev vite 服务`
// node server.mjs 运行后端进程
console.log('我是一个在前端项目中藏着的BFF程序')