// prompt(文本输入)
// ->tokens(编码器)->向量化(embedding 数字语义)->llm(transformer)->tokens(解码器)->文本输出
import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const client = new OpenAI({
    apiKey: process.env.DASHSCOPE_API_KEY, // 阿里百炼
    baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
});
// llm 向量化的封装函数
async function getEmbedding(text) {
    // 文本 数学 高维度 向量化
    const res = await client.embeddings.create({
        // 嵌入模型 embedding
        model: 'text-embedding-v4',
        input: text,
        dimensions: 1024  // 维度
    });
    return res.data[0].embedding;
}
// 余弦相似度
function cosineSimilarity(vecA, vecB) {
  let dot = 0, magA = 0, magB = 0;
  for (let i = 0; i < vecA.length; i++) {
    dot += vecA[i] * vecB[i];
    magA += vecA[i] ** 2;
    magB += vecB[i] ** 2;
  }
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

async function run() {
    // 语义是相似的
    // 文本匹配绝对不一致
    // embedding 语义 1024 维度 向量化-1->1数学表达
    const text1 = "Andrej Karpathy LLM Tokenization 分词原理";
    const text2 = "卡帕西讲解大模型BPE字词分词";
    const text3 = "今天天气晴朗，适合出门散步";
    const vec1 = await getEmbedding(text1);
    const vec2 = await getEmbedding(text2);
    const vec3 = await getEmbedding(text3);
    console.log(cosineSimilarity(vec1, vec2));
    console.log(cosineSimilarity(vec1, vec3));
    console.log(cosineSimilarity(vec2, vec3));
    // console.log(vec1);
    // console.log(vec1.length);
}

run();