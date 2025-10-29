// 模块化导入
import  OpenAI  from 'openai';
// 导入包的一部分，优化
// es6 解构
import { config } from 'dotenv';

config({
    path:'.env'
});
// 进程启动了
console.log(process.env);

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    // openai sdk 是AIGC 事实标准
    // 默认发送请求到openai 自定义服务器地址 LLM 服务代理商或其它模型
    baseURL:'https://api.agicto.cn/v1'
});
// 箭头函数
// async 耗时性的任务 异步任务
const main = async () => {
    // 生成图片接口
    const response = await client.images.generate({
        model:'dall-e-3', //达芬奇
        // prompt 给LLM 下达的指令
        prompt:'A spaceship flying through the universe',
        n:1,
        size:'1024x1024'
    })
    // 打印响应
    console.log(response.data[0].url);
}

main();
