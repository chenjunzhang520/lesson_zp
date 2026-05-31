import {
    ChatDeepSeek
} from '@langchain/deepseek';
import 'dotenv/config';

const model = new ChatDeepSeek({
    model: 'deepseek-chat',
    temperature: 0.7,
})
// http api 请求
const res = await model.invoke('我叫盛困吧，喜欢喝白兰地');
console.log(res.content);
console.log('--------------');
console.log(res2.content);