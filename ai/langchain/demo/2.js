// chain 
// AI 业务是复杂的，分步骤处理，每步可执行可配置，
// 连起来，形成工作流，Agent 
// chain 先后顺序，流程，组织起来的
import 'dotenv/config';
import { ChatDeepSeek } from '@langchain/deepseek';
import { PromptTemplate } from '@langchain/core/prompts';

const model = new ChatDeepSeek({
    model: 'deepseek-reasoner',
    temperature: 0.7,
});

const prompt = PromptTemplate.fromTemplate(`
    你是一个前端专家，用一句话解释：{topic}
    `);
// prompt 模板节点 -> 
// model 代表llm 节点 
// 结束节点 invoke 
// pipe 管道，连接节点，形成工作流
// runnable sequencial workflow 
// SequencialChain
const chain = prompt.pipe(model);
// console.log(chain instanceof RunnableSequence);
const response = await chain.invoke({
    topic: '闭包'
})
console.log(response.text);
