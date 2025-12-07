# AI 流式输出

- streaming 流式输出
LLM 交互的用户体验(新)优化 爽
streaming：true 边生成边返回，没必要done 后再返回所有结果
等待时间 
后端 负责业务 

- 编码
  - 任何内容都是由二进制存储 (太低效率)
  - 对内容(非文本、网络通信)进行二进制剪裁或操作
    Buffer 缓冲
  - 编码 解码
    html5 TextEncoder TextDecoder