const ipt = document.getElementById('ipt');
const reply = document.getElementById('reply');
const endpoint = 'https://api.coze.cn/open_api/v2/chat';
// DOM 2 
ipt.addEventListener('change',async function(event) {
  const prompt = event.target.value;
  console.log(prompt);
  const payload = {
    bot_id: import.meta.env.VITE_BOT_ID,
    user: 'yvo',
    query: prompt,
    chat_history:[],
    stream: false,
    custom_variables: {
      prompt: '你是一个AI助手'
    }
  }
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
    },
    body: JSON.stringify(payload)
  })
  const data = await response.json();
  console.log(data, '////');
  reply.innerHTML = data.messages[0].content;
})