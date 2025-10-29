# AI 综述
- AIGC
  生成式的人工智能 
  - 生成文本 gpt-3.5-turbo-instruct
  - 生成图片 dall-e-2

- 安装了dotenv , openai   （在AI项目中，dotenv常用于管理API密钥（如OpenAI API密钥），确保这些敏感信息不会被意外暴露或提交到代码仓库中。）
  优化一下？
  已经安装过了，不需要重新安装
  共享？更快，节省空间
  pnpm 代替npm （在AI项目中，pnpm 可以更快地安装依赖项，同时节省磁盘空间。）
  pnpm（Performant npm）是一个高性能的 Node.js 包管理工具，通过硬链接和符号链接的方式存储和复用依赖，节省磁盘空间并提升安装速度。

  - npm init y
    初始化后端环境 packag.json 项目描述文件
    - pnpm o dptenv openai
    - node main.mjs
      node 以命令行运行main.js
      main.mjs 单点入口 方便管理
      mjs 模块化的js import from 导入模块
      程序运行后，将是一个独立的进程(process)
      进程 (家长) 是分配资源的最小单位
      前端document ，后端process
      process.env 环境变量 配置或参数
- doenv
  读取.env 文件里的内容添加到 process.env 环境变量

## Prompt 提示词
- 提示LLM ，词一段话，用聊天的方式 给LLM 下达指令
- 如果你要让大模型帮我们执行复杂的任务，精心设计Prompt 

## Prompt Engineering 提示工程
- 设计出合理的Prompt ，才能让大模型按照我们的意图执行任务
- 提示工程是一个迭代的过程， 不断优化Prompt ， 才能得到我们期望的结果
- 有时候，LLM 性能不太牛的时候，提示词也许可以独挡一面
- 提示词的编写上升到工程的角度，有些AI项目的核心就是几段提示词

## 数据分析
