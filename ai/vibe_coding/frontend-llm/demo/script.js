// llm api 地址 
const endpoint = 'https://api.deepseek.com/chat/completions' ;
// 请求头
const headers = {
    'Content-Type': 'application/json',
    // api key 请求令牌
    'Authorization': `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`
}
// 请求体
const payload = {
    model:'deepseek-chat',
    messages: [
        {role:'system', content:'You are a helpful assistant.'},
        {role:'user', content:'你好 DeepSeek'}
    ]
}

const response = await fetch(endpoint, {
    // POST 更安全 请求体
    method: 'POST',
    headers,
    body: JSON.stringify(payload)
})

const data = await response.json();
console.log(data);

document.getElementById('reply').textContent = data.choices[0].message.content;
