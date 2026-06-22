# 无状态 stateless
- 调用LLM 接口本质是什么?
http 调用 算力 生成结果
高并发、高可用， 后端需要支持无状态Stateless
- 无状态 什么是？
  http 无状态协议 (无状态 GET/POST....restful) + header(cookie?身份/Authorization)
  所有人都公平
  有状态？ 你是谁？ llm 服务器压力太大了
  - 每次请求都是独立的，不依赖于之前的请求
  - 服务器不需要存储客户端的状态
  - 服务器可以水平扩展，因为每个请求都是独立的

- llm 无状态 基于http ？
  - 每个请求独立

## llm 运行底层规则
- 无状态
- 尝试让llm “懂”我们
- 每次手动带上全部对话
- 服务器端并发
  在任何一台服务器上运行都没差别

## 升级
- Prompt Engineering 聊天对话
历史对话 、 知识库 claude.md，agent.md  上下文 
抽卡，prompt质量或设计只能提升抽到金卡，不是特别可控的
- Context Engineering 上下文工程
  RAG llm 不懂，没有， 更加优质的 mcp 
  skill 
- loop Engineering 循环工程
  Harness AI工程

## chatHistory 有啥问题？
- 没有维护全部的history  大模型的回复也是关键
- messages 越来越大， token 开销越大 
- LRU 一次对话里一直聊？ 任务还没完成，
  token开销变大， 最近在聊的留下，久远了的可以适当的删除
  capacity 