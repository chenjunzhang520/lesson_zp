import 'dotenv/config';  
import { ChatDeepSeek } from '@langchain/deepseek';
// 适配器 Provider 省去了适配工作
// 适配大模型也是工作量
// 提示词模块  
import { PromptTemplate } from '@langchain/core/prompts';
// static 方法 类的， 不是实例的 
const prompt = PromptTemplate.fromTemplate(`
    你是一个{role}.
    请用不超过 {limit} 字回答以下问题：
    {question}
    `)

const promptStr = await prompt.fomat({
    role: '前端面试官',
    limit: 50,
    question: '什么是闭包'
})