import 'dotenv/config';
import { MultiServerMCPClient } from '@langchain/mcp-adapters';
import { ChatOpenAI } from '@langchain/openai';
import chalk from 'chalk';
import {
    HumanMessage,
    SystemMessage,
    ToolMessage
} from '@langchain/core/messages';

const model = new ChatOpenAI({
  modelName:'deepseek-v4-pro',
  apiKey: process.env.DEEPSEEK_API_KEY,
  temperature: 0,
  configuration: {
    baseURL: 'https://api.deepseek.com/v1',
  },
});

const mcpClient = new MultiServerMCPClient({
    mcpServers: {
        'amap-mcp': {
            "url": "https://mcp.amap.com/mcp?key="
        },
        'my-mcp-server': {
            command: "node",
            args: [
                "E:/LESSON_ZP/ai/agent_in_action/mcp-demo/src/my-mcp-server.mjs"
            ]
        },
        'filesystem': {
            command: 'npx',
            args: [
                '-y',
                '@modelcontextprotocol/server-filesystem',
                'E:/LESSON_ZP/ai/agent_in_action/remote-mcp'
            ]
        },
        // Chrome DevTools MCP
        'chrome-devtools': {
            command: 'npx',
            args: [
                '-y',
                'chrome-devtools-mcp@latest'
                // 删除 --browser-url，让 MCP Server 自动启动新浏览器
    ]
        }
    }
})

const tools = await mcpClient.getTools();
const modelWithTools = model.bindTools(tools);

async function runAgentWithTools(query, maxIterations = 30) {
    const messages = [
        new HumanMessage({ content: query }),
    ];
    
    for (let i = 0; i < maxIterations; i++) {
    console.log(chalk.bgGreen(`第${i}轮迭代`));

    const response = await modelWithTools.invoke(messages);
    messages.push(response);

    if (!response.tool_calls || response.tool_calls.length === 0) {
        console.log(chalk.bgRed(`AI 回答: ${response.content}`));
        return response.content;
    }

    console.log(
        chalk.bgBlue(
            `工具调用：\n ${response.tool_calls.map(t => t.name).join(', ')}`
        )
    );

    for (const toolCall of response.tool_calls) {
        const foundTool = tools.find(t => t.name === toolCall.name);

        if (foundTool) {
            try {
                const toolResult = await foundTool.invoke(toolCall.args);
                let contentStr;

                if (typeof toolResult === 'string') {
                    contentStr = toolResult;
                } else if (toolResult && toolResult.text) {
                    contentStr = toolResult.text;
                } else if (typeof toolResult === 'object') {
                    contentStr = JSON.stringify(toolResult);
                } else {
                    contentStr = String(toolResult);
                }

                messages.push(
                    new ToolMessage({
                        content: contentStr,
                        tool_call_id: toolCall.id
                    })
                );
            } catch (err) {
                console.error(chalk.bgRed(`工具调用失败: ${toolCall.name}`), err.message);
                messages.push(
                    new ToolMessage({
                        content: `工具调用失败: ${toolCall.name}, 错误: ${err.message}, 参数: ${JSON.stringify(toolCall.args)}`,
                        tool_call_id: toolCall.id
                    })
                );
            }
        }
    }
    }

    // 最后一个消息是AI的回复
    return messages[messages.length - 1].content;
}

await runAgentWithTools(`北京南站附近的酒店，最近的 3 个酒店，拿到酒店图片，打开浏览器，展示每个酒店的图片，每个 tab 一个 url 展示，并且在把那个页面标题改为酒店名`);
// await runAgentWithTools(`北京南站附近的3个酒店，以及去的路线，
//     路线规划生成文档保存到 当前目录 的一个 md 文件`)
await mcpClient.close();
