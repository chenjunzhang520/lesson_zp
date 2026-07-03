import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const client = new OpenAI({
  apiKey: process.env.DASHSCOPE_API_KEY,
  baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1'
})

const response = await client.embeddings.create({
  model: "text-embedding-v4",
  input: "洪圣同学大三哦"
});

console.log(response.data[0].embedding);