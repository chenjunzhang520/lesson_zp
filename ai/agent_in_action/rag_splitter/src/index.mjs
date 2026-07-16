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
    separators: ['。', '！', '？'], // 400字符，按段落切片
    chunkOverlap: 100, // 每个chunk 重叠大小
});
const splitDocuments = await textSplitter.splitDocuments(documents);
console.log(splitDocuments);