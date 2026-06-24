import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();
// 缸中大脑
const client = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseURL: process.env.DEEPSEEK_BASE_URL
});
// tools 配置
// JSON schema
// 将函数降维为语言
// 新旧范式的融合
const tools = [
  {
    "type": "function",
    "function": {
      "name": "get_closing_price",  // 决策， llm做不了，要调用工具
      "description":"获取指定股票的收盘价",// llm 决策的
      "parameters": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "股票名称"
          }
        },
        "required": ["name"]
      }
    }
  }, 
  {
    type: 'function',
    function: {
      name: 'get_weather',
      description: '获取指定城市的天气',
      parameters: {
        type: 'object',
        properties: {
          city: {
            type: 'string',
            description: '城市名称'
          }
        },
        required: ['city']
      }
    }
  }
]
// 传统软件世界
function get_closing_price(name) {
  if (name === '青岛啤酒') {
    return '67.92';
  } else if (name === '贵州茅台') {
    return '1488.21';
  } else {
    return '未找到该股票';
  }
}

async function sendMessage(messages) {
  const res = await client.chat.completions.create({
    model: 'deepseek-v4-pro',
    messages,
    tools,
    tool_choice: 'auto'
  });
  return res;
}

async function main() {
  let messages = [
    { role: 'user', content: '青岛啤酒的收盘价是多少？' }
  ];
  // 不是一步就能完成了 
  // 第一次调用大模型
  const response = await sendMessage(messages);
  const message = response.choices[0].message;
  console.log('模型返回message 对象', JSON.stringify(message))
  messages.push({
    role: message.role,
    content: message.content,
    tool_calls: message.tool_calls
  })
  if(response.choices[0].message.tool_calls) {
    const toolCall = response.choices[0].message.tool_calls[0];
    if (toolCall.function.name === 'get_closing_price') {
      const args = JSON.parse(toolCall.function.arguments);
      const price = get_closing_price(args.name);
      console.log('股票收盘价', price);
      messages.push({
        role: 'tool', // 工具完成的
        content: price,
        tool_call_id: toolCall.id // 多个工具， 用id关联
      })
      console.log('更新后完整对话上下文:', messages);
      //交互还在chatbot , 大模型
      const finalRes = await sendMessage(messages);
      console.log('最终模型返回message 对象', 
        finalRes.choices[0].message.content
      )
    } else if (toolCall.function.name === 'get_weather') {
      
    }
  }
}
main();