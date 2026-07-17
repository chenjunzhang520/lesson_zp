import 'dotenv/config';
import "cheerio"; 
// 从url 加载文档
import { 
    // loader 按url 加载 
    CheerioWebBaseLoader 
} from "@langchain/community/document_loaders/web/cheerio";
import { 
    // 递归
    RecursiveCharacterTextSplitter 
} from "@langchain/textsplitters";
import { 
    MemoryVectorStore
} from "@langchain/classic/vectorstores/memory";
import {
    ChatOpenAI,
    OpenAIEmbeddings
} from "@langchain/openai";

const model = new ChatOpenAI({
  temperature: 0,
  model: process.env.MODEL_NAME,
  apiKey: process.env.OPENAI_API_KEY,
  configuration: {
    baseURL: process.env.OPENAI_BASE_URL,
  },
});

const embeddings = new OpenAIEmbeddings({
  apiKey: process.env.OPENAI_API_KEY,
  model: process.env.EMBEDDINGS_MODEL_NAME,
  configuration: {
    baseURL: process.env.OPENAI_BASE_URL
  },
});

// 访问网址
// cheerio 可以传递css 选择器 来提取文档内容 缩小范围
// 爬取指定内容 + Document标准
const cheerioLoader = new CheerioWebBaseLoader(
    'https://juejin.cn/post/7660707431753678854',
    {
        selector: '.main-area p'  // 文章段落
    }
);
// 大的document 分成小的document 更加精细的去处理语义
// 按段落划分？ 语义分段，段落太长，段落太短？
// 目的是语义精确，重点
// 句子。！？ 适合 ，不适合
// chunk 大小 400字符
const documents = await cheerioLoader.load();
// console.log(documents)
// 切片
// 语义排第一
// 按大小切割，chunkSize 就够了 
// 为了语义完整。少一点  
// 递归 尝试不同的分隔符，找到最优的分隔符，使每个chunk 都有语义
// 切接近chunkSize
// 不完美的地方，直接硬切 chunkOverlap来补救 重叠
const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 400, // 每个chunk 大小  document，切片 chunk
    // 递归尝试的 如果拼上一句超过chunkSize，就会放到下一个chunk
    separators: ['。', '！', '？'], // 400字符，按段落切片
    // 文字会被中间切断语义？ 通篇没有标点， 菜单 佛经 古文
    // 如果切断了，就会用overlap 空间来补救 10%
    // 如果没有切断， 不会overlap的
    chunkOverlap: 100, // 每个chunk 重叠大小
});
const splitDocuments = await textSplitter.splitDocuments(documents);

console.log(splitDocuments);
console.log(`文档分割完成，共${splitDocuments.length}个chunks`)
console.log("创建向量存储");
const vectorStore = await MemoryVectorStore.fromDocuments(
    splitDocuments,
    embeddings,
);
console.log("向量存储完成");
const retriever = vectorStore.asRetriever({k:3});

const question = "fs模块有哪些api";
console.log('='.repeat(80));
console.log(question);
console.log('='.repeat(80));
// 检索 相关文档
// invoke 执行 
// 内部逻辑， 将question 转为向量 
// 在向量数据库中计算距离 返回K 个Document对象
// 工作流编排
const docs = await retriever.invoke(question);
console.log(docs);
// 还想要打分 本来没有必要
// 向量的距离 越小就越相似
const scoredResults = 
  await vectorStore.similaritySearchWithScore(question, 3);
console.log(scoredResults);

console.log("\n [检索到的文档及相似度评分]");
docs.forEach((doc, i) => {
  const scoredResult = scoredResults.find(([scoredDoc]) => 
    scoredDoc.pageContent === doc.pageContent
  )
  // retriever 过滤， rerank 
  // 1- 值越大越相似，cosine 
  const score = scoredResult? scoredResult[1]: null;
  const similarity = score != null ? (1 - score).toFixed(4):
  "N/A"

  console.log(`\n[文档 ${i + 1}] 相似度指标: ${similarity} (原始分: ${score})`);
  console.log(`内容: ${doc.pageContent.substring(0, 50)}...`); // 只打印前50字避免刷屏
  console.log(`元数据：章节=${doc.metadata.chapter}, 角色=${doc.metadata.character}, 类型=${doc.metadata.type}`);
});

// Augmented
const context = docs
  .map((doc, i) => `[片段${i}]\n ${doc.pageContent}`)
  .join("\n\n-----\n\n");

const prompt = `
你是一个文章辅助阅读助手，根据文章内容来解答：
文章内容：
${context}
问题：${question}
你的回答:`;

const response = await model.invoke(prompt);
console.log(response.content);
