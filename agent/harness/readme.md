# Harness Engineering

- AI 数年历史
Prompt (Prompt Engineering -> Context Engineering) -> Harness Engineering
RAG Retrival 先检索 Augument(增强) Gerneration 生成 
检索增强生成 

Harness Engineering 
25年下半年 claude Code 接棒cursor 在ai coding 领域
小龙虾openclaw，hermes 办公赛道 
tecent 在 codebuddy coding     workbuddy 办公自动化
微信 + workbuddy 

想象你有一匹马，那马很有力量，真正能让马make work 的，需要啥？ 给马套上挽具、缰绳、马鞍 ，这些统称为harness。

当下llm 很智能，但是不代表能给出一个好的输出。

harness 是个比喻，对应着让llm 好用的一些技术工程架构

harness 主要研究怎么在模型外面套上一层好的挽具。
让模型的能力可以稳定、重复的去驾驭

Harness 不再是简单的把prompt 给它提升 ，比Prompt 大一个量级

在了解harness 之前，先要了解LLM 有哪些**结构性**的缺陷。
- stateless 无状态
  每次对话结束，他什么都不记得
- 无法主动操作外部世界 ，只能生成文字|图片
  复杂项目 不只有 读写 浏览器等常规工具，mcp。skill 一堆
  管理起来 
- 他的输出是概率性的
  同样的输入，可能产出不同的输出 
  文无第一(文章生成等)，武无第二 (Coding 生成？ 赛道)
- 有上下文限制 不能无限的去处理信息
  deepseek-v4-flash 为例  1M(100万 Tokens) 的超长上下文处理能力
以上四个 是llm 的自身特质。

harness 要做的，就是在这些基本的性质上，建造一套系统(工程化手段)，让模型可以完成原本无法独立完成的任务。

模型是引擎， harness 就是装着v8 引擎的车。引擎再牛，没有好的变速箱 ，没有刹车，没有仪表盘 ，这个车没法上路。

## harness 包含哪几部分？

harness engineering 不是具体工程或框架，而是围绕着这个模型，去构建的几类基础设施的总称

核心有四层
- 记忆层
解决模型无状态的问题，模型本身就不记得上一次对话说什么，也不知道你的项目有什么规范。

vibe coding 氛围编程 不断的去自然语言编程 ？
claude.md / agents.md 文件系统带来记忆的存储。
他是首先要掌握的harness 记忆模块的一个核心，是导航地图
告诉agent 最关键的约束和这个规则，每次带上。

## 案例驱动
不要急于生成代码
/init 初始化 项目的记忆，非常重要。 项目核心约束，包含项目功能、技术栈、开发规范、文件或目录结构等 
全新的项目，新建 claude.md 文件记忆 
每次prompt 都会带上， 解决stateless
每当claude.md 改变后，再次执行/init  更新memory

harness engineering 中 memory 很重要！