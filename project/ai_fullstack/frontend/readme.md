## notes AI 全栈项目 
- 登录功能 
- 文章系统 
- AIGC 功能
- nestjs 后端 
### shadcn
- 页面由组件构成，选用第三方组件库
- 严格按需加载
- 组件下载到本地，可以随意的修改。
- 基于tailwindcss 
- 配置alias 设置路径别名，更短，好用
### vite 的配置
- vite.config.ts 配置对象 
- plugins 插件
  react | vue
  tailwindcss
- resolve 
  alias 路径别名
  @ -> __dirname/src 
  npm i -D @types/node node 来到ts 开发的时候 
  单独安装了node 的类型声明文件
- ts 配置文件
  根目录下的 tsconfig.app.json
  compilerOptions 目录输出建议
  baseUrl
  path