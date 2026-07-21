import 'dotenv/config';
import { ChatOpenAI } from '@langchain/openai';
// 把大模型输出解析成纯字符
// chain上  不用那么复杂，直接给我们content内容
import { StringOutputParser } from '@langchain/core/output_parsers';
// prompt 好复用
// 以前是硬编码，写在代码里面，不好维护，不好模块化
// Agent 中很多业务都是prompt驱动的，不同的用户，是同一套ai 业务，只需要换身份就好，PromptTemplate 
// 会在AI 工作流的比较前的位置
import { PromptTemplate } from '@langchain/core/prompts';
// llm
// 创意性更多的 
const creativeModel = new ChatOpenAI({
  model: 'deepseek-v4-flash',
  temperature: 0.8, // 增强创意的发散性
  topK: 4, // 仅从概率前4的词汇里采样，限制跑偏
  maxToken: 600,
  apiKey: process.env.DEEPSEEK_API_KEY,
  configuration: {
    baseURL: 'https://api.deepseek.com',
}
})
// 严谨的
const preciseModel = new ChatOpenAI({
  model: 'deepseek-v4-flash',
  temperature: 0.2, // 保守
  topK: 8, // 更大的topk，保证信息的完整性
  maxToken: 600,
  apiKey: process.env.DEEPSEEK_API_KEY,
  configuration: {
    baseURL: 'https://api.deepseek.com',
}
});
// prompt 更好维护，管理，复用
const storyPrompt = PromptTemplate.fromTemplate(
  `
  请写一篇短篇散文，主题：{theme}
  风格温柔治愈，篇幅200字左右，不要分段，文字细腻有画面感。
  `
);
// 输出解析器，统一返回纯文本
const outputParser = new StringOutputParser();
// 工作流 pipe 一下  工作流的流转
// AI 工程复杂 设计好了AI 工作流
const creativeChain = storyPrompt.pipe(creativeModel).pipe(outputParser);
// 各种的AI 工作流生产线路
const preciseChain = storyPrompt.pipe(preciseModel).pipe(outputParser);

// 原料送到流水线上生产？
async function runWriteDemo() {
    const theme = "秋日山野晚风";

    console.log('创意写作模式');
    const creativeStory = await creativeChain.invoke({ theme });
    console.log(`创意写作结果：${creativeStory}`);
    console.log('严谨写作模式');
    const preciseStory = await preciseChain.invoke({ theme });
    console.log(`严谨写作结果：${preciseStory}`);
}
runWriteDemo()
    .catch(err => console.error(err));
