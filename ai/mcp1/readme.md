# MCP 

Context Engineering ,非常火的MCP(Model Center Protocol) 协议。

http 协议， Protocol 

MCP Anthropic 公司 于2024年 11月25日 推出的
AI界通用USB-C 接口协议   电脑端会安装llm 客户端
MCP client(Cursor, Trae, Claude Code, Codex), 对接Claude OpneAI 等各大模型。
各类网盘服务、远程服务、邮件服务、本地文件等MCP Server
有了MCP, 不用为不同模型写对接代码，能轻松把各类数据工具标准化接入大模型上下文。

三部分 
- MCP Server 
  服务端 提供了大模型想用的各种上下文 
  定义好server 如何和client 交互 (通信) 
  将上下文服务提供给llm
- MCP Host 宿主
  Claude Code 等AI Agent 
- MCP Client 客户端
  配置一堆的MCP client 
  插件一样 古茗， 高德地图， Gmail 

会prompt 方式 于host 交互 ， 通过推理，不是预训练的知识能回答的，去看下host 里面有哪些client ，可以为我们的任务提供上下文。为Context Engineering 提供标准化的通信底座，彻底终结过往RAG、函数调用零散适配的乱象。
有了MCP,就好像USB-C 数据线接口，能实现任意MCP 服务器和客户端的自由互联。
依托这套统一标准，大模型可调用的上下文来源得到极大补充(chatbot)，各类外部数据与工具的接入调用变得高效便捷。

## 案例
- npm i -g @modelcontextprotocol/server-filesystem
MCP 官方文件系统服务端，安装完了，本地server/ 远程server ，
用于通过MCP 协议安全读写本地指定目录文件，为AI模型提供合规的本地文件访问能力。

MCP 不单单只是便利，而是从根本上重构了AI的整个应用架构。真正把AI，从chatbot 推到了Agentic AI (智能体AI)阶段。

## MCP是什么？
- 他不是一个工具，也不是一个应用，不是一个api sdk，也不是一个产品，而是一个协议。它的目标是希望任何一个AI 模型，能以统一的方式去访问资源和工具。
mcp 就是llm 和外部世界的一个通信协议。
模型需要交互什么呢？ 模型想知道、能用、能调的内容。(工具和资源)

### 资源
数据库、API、文件， Sass (飞书、高德地图)
### Tool
创建日历、发邮件、执行命令、远程控制。
这些资源和工具就是让大模型变得真正有用的上下文和能力。