import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();
// 模块化输出 client 复用了
// app.server.mjs 大型项目的风骨 app 应用 service 获取llm 服务
export const client = new OpenAI({
  apiKey: process.env.DASHSCOPE_API_KEY,
  baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1'
})