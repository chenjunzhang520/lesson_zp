# 手写文件处理mcp
- server fs 读取文件
  - schema 声明 函数名字的，参数 地址
  返回 上下文 给llm 
- server还要满足mcp 通信协议

## 开发
- zod
数据验证 schema
- @modelcontextprotocol/sdk 协议的sdk 通信部分
cc prompt ->llm->分析->选中 fs client ->StdioServerTransport ->stdin->server-> 执行返回 -> stdout 
-> StdioServerTransport -> cc -> llm -> generate 