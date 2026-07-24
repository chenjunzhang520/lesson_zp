# Benchmark 

benchmark 是用标准题目给大模型打分的体系。

每次一个新的模型分布，宣传页都有一堆数字。

- MMLU
- GPQA
- HumanEval

benchmark 是llm 在一些列测试中的得分集合 (多维，可测)

## 基准测试 
给一队测试标准题目，让AI模型去打分，模型的高考，考完了会出一个分数。
- 为什么需要benchmark?
大模型太多了，gpt，claude，gemini，deepseek，qwen，需要一个客观标准， Benchmark 就是这个标准。
llm的能力是多维的 
- MMLU 综合知识
  Massive(巨大) Multitask Language Understanding
  57个学科 领域选择题，从初中历史到大学医学，考的是llm的知识广度，相当于文理综合卷。
- GPQA  Diamond
  顶级推理
  Graduate-Level Google-Proof Q&A
  专门去出研究生级别的物理、化学、生物难题。
  为什么叫Google-Proof, 因为这些题就算你上网搜索也难找到答案。

  考的是模型选哪个是不是真正能推理，而不是去背答案

- HumanEval 代码能力 SWE-bench 
  两套试卷
  HumanEval 164道编程题目，让大模型写出能够跑通的代码。
  SWE-bench 让模型直接去修真实的github 项目的bug

- MATH/AIME 数学推理
竞赛级的数学题 

AIME  美国数学邀请赛的原题，考模型能不能一步步推导出正确答案，而不是凑结果

- C-Eval 中文能力
专门针对中文语境，覆盖52个学科，4种难度
准备了训练预科

- 厂商怎么用benchmark?
每次模型发布，会拿出一堆的benchmark，来说明自己的能力强

- openai 4.1 benchmark
- claude
厂商会挑表现好的那几项去放大

模型在XX上说第一，不代表整体最强
可能只是在某一项考试里面拿到了最高分

## benchmark 作用
是一个门槛，不是排名
一个模型连benchmark 都差，大概率能力也差。(门槛)
但分数高，也不一定好用
要看多个维度，不是看单一分数

要看具体业务，以及使用的实际效果。

## 总结
Benchmark 是用标准题给大模型打分的体系，不同测试集考不同的能力
知识、推理、代码、数学、中文、厂商会选择展示对自己有利的数据，结合自身需求和体验判断