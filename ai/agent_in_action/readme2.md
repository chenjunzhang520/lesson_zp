# TOOL, 让大模型自动干活

## demo 
```
创建一个react+vite的todolist
```
要用到哪些tool？ /demo
编程任务 planning 分三步
- vite 创建项目 写入文件tool
- llm 编程能力比较强的模型 就能做的 写入文件tool
- 项目运行起来 调用cli 命令的tool 
## 手写一个简单版本的claude code Agent 
llm + Tool (fs + cli)

## langchain
llm 开发框架 比openai(transformer, Generative) 还早诞生
- llm 有很多家 兼容各家大模型
@langchain/openai

## Message
SystemMessage 设置AI是谁，可以干什么，有什么能力，以及一些回答，行为的规范等
HumanMessage 
AIMessage
ToolMessage 调用工具的结果返回 Tool id

原生 openai 返回工具调用 additional_kwargs -> tools -> 每个tool
langchain invoke 原样输出上面的，同时还会细心的准备tools 加到后面
llm 工程开发的便捷性，可读性 帮助 

## AI 工程
- 工程目录  
    根目录 package.json node_modules
- src 开发代码目录 
    - promise 特性
    async 函数 就是promise 实例 ， return resolve 并且return的结果就是

## 总结第一个编程助手Agent
- ReAct Agent 工作流框架 
    分析Agent 的执行流程 每一步的reason act observe 
- langchain 
    tools 声明 (async fn + schema(zod))
    invoke 执行  (message, tool, ....)
    4种Message 派生类 
    modelWithTools  llm 工作流 coze 节点之间连线 
    langchain 工作流 ChatOpenAI -> tools -> bindTools > invoke 
    llm 工作流编排框架
- Agent 工作流程
    - llm 能力边界
      stateless + 不能直接干活 
    - 不停的维护messages数组 
    - llm reason不能直接生成，直接返回带tool的消息 
    - tool 执行 ToolMessage tool_id 加入 
    - 最简单的loop 有工具调用
      没有 拿着所有的messages 去 最后一次调用llm  完成任务，拿到结果
- Promise 升级
    async 函数执行完后 是promise return resolve值
    Promise.all   find ， map
    if(tool)
    try catch 