# React 项目架构
- npm init vite 
  - 从github 拉取一个项目模板
  - npm run dev dev development
    vite 就是开发阶段的脚手架
    test 测试阶段
    production 上线阶段 
    dev -> test -> production -> dev -> test -> production -> 
    devDependencies 开发依赖 vite stylus 开发期间使用
    npm i -D stylus
    dependencies 项目依赖  
  - react 基建也交给vite 
    - esm 模块化,极致的冷启动

- 项目依赖
  vue 3.5.24
  react 19.2.0 第一的现代前端开发框架  响应式、组件化、数据绑定...
  react-dom 19.2.0
  vue = react(core) + react-dom(comppnent render dom
  )
- 引入路由
  - 安装路由
    npm i react-router-dom
  - 路由的配置
  - 导航， 页面级别组件