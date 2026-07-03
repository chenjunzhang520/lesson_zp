# RAG 实战 
Retrival 检索
Augment 增强
Generate 生成
## 自然语义搜索
- data/posts.json 检索的范围
- 有哪些vue相关的内容？
  正则, like '%vue%' 精确的传统搜索
  文字匹配？
  "酸辣土豆丝的做法...."
  "马铃薯怎么做？"
- question emdedding 向量化 语义
- 内容都embedding 
- rag 向量相似度计算

## juejin 的搜索
- 提前将内容 embedding 
需要向量数据库  milvus postgresql(mysql一样关系数据库，但是支持向量存储)