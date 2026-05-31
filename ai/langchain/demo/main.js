import 'dotenv/config';  
// console.log(process.env.DEEPSEEK_API_KEY,'1111');
import { ChatDeepSeek } from '@langchain/deepseek';

const model = new ChatDeepSeek({
    model: 'deepseek-reasoner',
    temperature: 0
    // langchain 帮我们适配了市面上大多数的llm 
    // baseURL ? 不用 适配器模式   Provider
    // apiKey 
})
// invoke 执行
const res = await model.invoke('用一句话解释什么是RAG？')
console.log(res.content);