    // rag 实现语义搜索
    import fs from 'fs/promises';
    import { client } from './app.service.mjs';
    import readline from 'readline'; // node 内置的 读取标准输入

    const inputFilePath = './data/posts.embedding.json';

    const data = await fs.readFile(inputFilePath, 'utf-8');
    const posts= JSON.parse(data);
    const cosineSimilarity = (v1, v2) => {
    // 计算向量的点积
    const dotProduct = v1.reduce((acc, curr, i) => acc + curr * v2[i], 0);

    // 计算向量的长度
    const lengthV1 = Math.sqrt(v1.reduce((acc, curr) => acc + curr * curr, 0));
    const lengthV2 = Math.sqrt(v2.reduce((acc, curr) => acc + curr * curr, 0));

    // 计算余弦相似度
    const similarity = dotProduct / (lengthV1 * lengthV2);

    return similarity;
    };

    // console.log(posts[0]);  
    // 命令行交互 
    const rl = readline.createInterface({
    input: process.stdin, // 进程的 标准输入 问题
    output: process.stdout // 进程的 标准输出 答案
    });

    const handleInput = async (answer) => {
    console.log(answer);
    // rl.close();
    const response = await client.embeddings.create({
        model: "text-embedding-v4",
        input: answer
    });
    const { embedding } = response.data[0];
    // 相似度排名前几的数据
    // 返回一个新的数组  ()  优先 
    const results = posts.map(item => ({
        ...item,
        similarity: cosineSimilarity(item.embedding, embedding)
    })).sort((a, b) => a.similarity - b.similarity)  // 从低到高排序
    .reverse()
    .slice(0, 3)
    .map((item,index) => `${index+1}. ${item.title}. ${item.category}`)
    .join('\n');
    console.log(`\n 搜索结果：\n${results}`);
    // rl.close();
    rl.question("\n请输入你要搜索的内容:", handleInput);
    }

    rl.question("\n请输入你要搜索的内容:", handleInput);
