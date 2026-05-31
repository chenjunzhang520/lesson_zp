# LLM 记忆

- llm api 调用和http 请求一样，都是无状态的。
- 怎么让llm 有记忆？
  维护一个对话记录，每次调用llm 时，都把历史记录带上

messages = [
    {
      role: 'user',
      content: '我叫陈昊，喜欢喝白兰地'
    },
    {
      role: 'assistant', 
      content: '----------'
    },
    {
      role: 'user',
      content: '你知道我是谁吗？'
    }
  ]

## 多轮会话
- llm 调用无状态的
- 多轮会话 维护一个对话历史记录messages，每次调用llm 时，都把历史记录带上。
  - 维护对话 
  - 滚雪球一样，token 开销太大 

## memory AI 应用的模块 langchain 