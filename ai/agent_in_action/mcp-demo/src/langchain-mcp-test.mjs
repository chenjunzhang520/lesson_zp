import 'dotenv/config';
// agent 配置 mcp client ? 可以配置多个mcp server的client 
import { MultiServerMCPClient } from '@langchain/mcp-adapters';
import { ChatOpenAI } from '@langchain/openai';
import chalk from 'chalk';
import { 
    HumanMessage, 
    SystemMessage,  
    ToolMessage
} from '@langchain/core/messages';

const model = new ChatOpenAI({
  modelName:'deepseek-v4-flash',
  apiKey: process.env.DEEPSEEK_API_KEY,
  temperature: 0,
  configuration: {
    baseURL: 'https://api.deepseek.com/v1',
  },
});

const mcpClient = new MultiServerMCPClient({
    mcpServers: {
        'my-mcp-server': {
            command: 'node',
            args: [
                'E:/LESSON_ZP/ai/agent_in_action/mcp-demo/src/my-mcp-server.mjs'
            ]
        }
    }
});
// 获取工具
const tools = await mcpClient.getTools();
const modelWithTools = model.bindTools(tools);

async function runAgentWithTools(query, maxIterations = 30) {
    
}