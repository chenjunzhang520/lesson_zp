// posts.json 向量化
// - node 内置的fs 模块 读取文件到内存
// - JSON.parse() 每一项 await embedding 加到json 数组中
// - 写入文件 embedding 长期存储
// 09 node 出圈了 es6 2015 年 支持promise 的fs 模块
// node 后端，系统层的api 
import fs from 'fs/promises'; // 支持promise 的fs 模块
import { client } from './app.service.mjs';

// 上下文路径
const inputFilePath = './data/posts.json';
const outputFilePath = './data/posts.embedding.json';
// node 新版 全局直接await
// I/O 操作 
// 文件 二进制文本
const data = await fs.readFile(inputFilePath, 'utf-8');
// console.log(typeof data);
const posts = JSON.parse(data);
// console.log(posts[0]);
const sleep = (ms) => 
    new Promise(resolve => setTimeout(resolve, ms));

const postsWithEmbedding = [];
// 代码的可读性
for (const { title, category } of posts) {
  console.log(title, category, 'embedding');
  const response = await client.embeddings.create({
    model: "text-embedding-v4",
    // 语义更准确, 可以细致的语义匹配
    input: `标题：${title} 分类：${category}`
  });
  postsWithEmbedding.push({
    title,
    category,
    embedding: response.data[0].embedding
  });
  await sleep(200);
}
console.log(`成功写入文件`)
await fs.writeFile(
    outputFilePath, 
    JSON.stringify(postsWithEmbedding, null, 2)
);