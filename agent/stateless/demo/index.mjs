    import OpenAI from 'openai'
    import { config } from 'dotenv'
    config();

    const client = new OpenAI({
    apiKey: process.env.DEEPSEEK_API_KEY,
    baseURL: process.env.DEEPSEEK_BASE_URL,
    })
    // 异步任务
    // promise 实例
    // 对话历史
    const chatHistory = [
        { role: 'system', content: '你是一个严谨的助手' }
    ];
    async function testStateless() {
        console.log('第一次请求，告诉模型一个信息');
        // 为了让llm 懂我们， 每次带上history 
        chatHistory.push({
            role: 'user',
            content: '请记住，我的名字叫111'
        })
        const response = await client.chat.completions.create({
            model: 'deepseek-v4-flash',
            messages: chatHistory,
        });
        // 模型回复
        chatHistory.push({
            role: 'assistant',
            content: response.choices[0].message.content
        })
        console.log('模型回复:', 
            response.choices[0].message.content);
        console.log('第二次请求，直接问我是谁');
        chatHistory.push({
            role: 'user',
            content: '请问我的名字是什么？'
        })
        const response2 = await client.chat.completions.create({
            model: 'deepseek-v4-flash',
            messages: chatHistory,
        });
        // 模型回复
        chatHistory.push({
            role: 'assistant',
            content: response2.choices[0].message.content
        })
        console.log('模型回复:', 
            response2.choices[0].message.content);
        console.log('chatHistory:', chatHistory);
    }

    // console.log(testStateless())
    testStateless()
    .catch(err => { // test函数 reject
        console.log(err);
    })