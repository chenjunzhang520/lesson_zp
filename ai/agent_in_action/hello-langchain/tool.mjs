import 'dotenv/config';
import { ChatOpenAI } from '@langchain/openai';
import { tool } from '@langchain/core/tools';
import { 
    HumanMessage, // user role:'user'
    SystemMessage,
    ToolMessage,
    AIMessage
} from '@langchain/core/messages';
import fs from 'node:fs/promises';
import { z } from 'zod';  // z 提供类型约束

const model = new ChatOpenAI({
    modelName: 'deepseek-v4-flash',
    apiKey: process.env.DEEPSEEK_API_KEY,
    temperature: 0,
    configuration: {
        baseURL: 'https://api.deepseek.com/v1',
    },
});
// 读文件工具
const readFileTool = tool(
    async({ filePath }) => {   // 功能函数
        const content = await fs.readFile(filePath, 'utf-8');
        // 时刻反馈Agent 执行消息
        // Agent 任务可能很复杂,很耗时，需要给用户反馈 
        // 太久没有看到反馈， 退出
        console.log(`[工具调用] read_file(${filePath})
            成功读取${content.length} 字节`)
        return content;
    },
    {
        name: 'read_file',
        description: `用此工具来读取文件内容，当用户要求读取文件、
        查看代码、分析文件内容时，调用此工具。输入文件路径(
        可以是相对路径或绝对路径)`,
        schema: z.object({
            filePath: z.string().describe('要读取的文件路径')
        })
    }
)
// 多个工具
const tools = [
    readFileTool
]

// langchain 提供了llm 和tools 注册的抽象
const modelWithTools = model.bindTools(tools);

const messages = [
    new SystemMessage(`
        你是一个代码助手、可以使用工具读取文件并解释代码。
        
        工作流程：
        1. 用户要求读取文件时，立即调用read_file 工具。
        2. 等待工具返回文件内容。
        3. 基于文件内容进行分析和解释。

        可用工具:
        - read_file: 读取文件内容(使用此工具来获取文件内容)
    `),
    new HumanMessage('请读取 tool.mjs 文件内容并解释代码'),
];

let response = await modelWithTools.invoke(messages);
// console.log(JSON.stringify(response));
messages.push(response);
// 多个工具 await read await write 并发？ 
