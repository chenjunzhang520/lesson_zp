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

- npx shadcn@latest init
  npx 是 Node.js 自带的工具，用于临时安装并**执行** npm 包中的命令，无需全局或本地预先安装。
  不用预先安装 ， 试用，测试那边，用完会删除 
- shadcn 提供命令行
  - button
  npx shadcn@latest add button

### 路由
- 路由懒加载(性能优化的关键)
- suspense + lazy 实现路由懒加载
- 自定义loading 组件
- 路由守卫
  - user store islogin 

### BackToTop组件
- 通用组件
- 自有状态isVisible 
- onScroll 判断一个阈值
- scroll事件频繁触发，性能优化
  节流 utils 目录下 工具函数 
- 组件卸载时 移除事件监听，防止内存泄漏。

### 幻灯片组件 slides 
- shadcn 提供了 Carousel、CarouselContent、CarouselItem、
  一组组件，层次结构
- 自动播放的功能作为插件引入， shadcn 简单性能好，定制性更好
  useRef  持久化可变的对象
  plugins=[]
- api 向外暴露Carousel 的各种功能
  selectedIndex 私有状态
  api onnSelect 方法 改变之
- 指示点 
  循环输出
  动态类名
- css 
  - transition-all 
  - gradient  线性渐变， 取代图片(渐变色)做背景
  性能优化 图片做背景 http下载的开销，减少http并发数

### store
- user 全局共享 
- 每个页面级别组件都有自己独立的store
  组件 UI 和 数据分离 

### Post List 
- 数据怎么提供呢？
  - 真实数据 在后端
  - axios 请求 后端api 
  - 前端要等待后端接口吗？不能等，前后端分离的基础上，
  前端可以自行解决数据需求？ mock 一下 伪造请求
  api接口文档 
  GET /api/posts?page=1&limit=10 返回内容
  {
    status: 200,
    list: Post[]
  }
  只要切换后端真正的地址，无缝对接

### mockjs 
- 前端接口伪造，开发时候用，上线前切换成后端接口，
  vite 启动 mock 
- 前后端确立接口开发文档
### posts mock
- 阅读接口文档
- mockjs 语法
  mockPath post.js
  export default {
    {
      url:,
      method:,
      response:(req, res) => {}
    }
  }
  - mockjs 随机功能  @ 
  - 分页机制
    - page, limit parseInt 
    - start, end, total, totalPage 
    - slice 
    - pagination