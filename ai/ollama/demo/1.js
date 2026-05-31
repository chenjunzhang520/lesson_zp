// ollama 11434 端口 开源大模型API 服务 
// v1/chat/completions 兼容openai 接口
const OLLAMA_URL = 'http://localhost:11434/v1/chat/completions';

const headers = {
    'Authorization': 'Bearer ollama',
    'Content-Type': 'application/json',
}

const data = {
    model:'qwen2.5:0.5b',
    messages:[
        {
            role:'user',
            content:'你好，威海的海好看吗？'
        }
    ]
}
fetch(OLLAMA_URL,{
    method:'POST',
    headers,
    body:JSON.stringify(data),
})
.then(res => res.json())
.then(data => {
    console.log(data.choices[0].message);
})
.catch(err => console.error('Error:',err));

  