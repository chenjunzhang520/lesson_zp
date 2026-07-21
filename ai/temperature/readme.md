# 大模型是怎么随机说话的？
控制大模型随机性的关键参数 
temperature 温度 随机性 0 - 1   文艺创作 | 写代码
Top K  随机样本 得分排序

上一个词 预测下一个词 predict next word 
概率分布 1
"你好"
啊 0.15 吗 0.6  呀 0.1  美 0.05  坏0.01 ......

- 大概率是不是生成"吗"？
  用temperature 0 - 1 之间
  0.2 低  严谨 吗
  0.8 高  随机 坏

- Top K ？ 
  概率分布 按得分去排序

- RAG解决了幻觉问题 
- 开发者有效、靠谱的去使用、控制AI应用的随机性。

- 把temperature 拉高 随机性增加， 生成会不太靠谱
- 有些创作类的 随机性 去增加创意，但想保证质量
分两步做
- 先用Top K 把高概率的词选出来
  3 | 2 默认值是8
  AI应用效果观测 
- 再用temperature 控制随机性
 0.2  代码， 法律， 公司合同
 0.8  创意创作 多模态模型 AI漫剧
   Top K 

- temeprature 和 Top K 不可能都太大的
  都很小也没有必要
  temperature 小， Top K 大，准确，艺术性
  temperature 大， Top K 小，靠谱的创意性会大

## langchain
lang(uage) + chain(llm 工作链|流编排)
### 核心模块 @langchain/core 
- messages 对话列表
- output_parsers 输出解析器
  帮我们自动的解析出相应的格式
- tools
- prompts 提示词模板

为什么需要langchain？
开发更快，业务类 
AI Agent 应用 生成式，概率分布 有点黑盒
要不觉得干的活不太智能，要不太智能，不知道它怎么干出来，
chain 就是把AI 工作链条上的每个节点链起来

## AI 工作流
- llm 两个 创意和严谨的 适合不同的业务。
- PromptTemplate 
- StringOutputParser 
start -> llm -> PromptTemplate -> StringOutputParser -> end