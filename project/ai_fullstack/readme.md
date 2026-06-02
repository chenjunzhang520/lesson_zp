# AI 全栈项目

## 技能点
## react 开发全家桶
- react + typescript(JS超级)
- react-route-dom(前端路由)
- zustand (中央状态管理)
- axios(http请求库)

### 后端
- node + js
- nestjs 企业级别后端开发框架  
- psql 数据库
- redis 缓存数据库
### AI
- langchain
- coze/n8n 
- llm 
- trae/cursor 
## 项目安排
- frontend
- backend
- ai_server
- admin 后台管理系统

## git 操作
- 全新的实战项目 
  git init
- 提交的时机
  每次完成一个相对独立的模块后，提交一下
  提交信息要准确完整

## react 全家桶
### react-router-dom 
- 前端路由 
早期前端没有路由，路由由后端，前端是切图仔
前后端分离，前端有独立的(html5)路由，实现页面切换。
- 两种形式
  - HashRouter  #/ 丑一点 很温柔 兼容性很好 锚点  
  - BrowserRouter / 和后端路由一样，需要使用到html5 history API 兼容不好，ie11 之前不兼容， 现在的浏览器几乎都支持
- as Router 可读性 
- 性能， 快 页面组件的懒加载
  /   Home  延迟一下About 阻止加载
  /About About 

### 路由有多少种？
- 普通路由
- 动态路由 /product/:id
- 通配路由 * 
- 嵌套路由 Outlet
  <Outlet> 是 React Router DOM 中的组件，用于在父路由元素中渲染其子路由匹配到的内容。
- 鉴权路由(路由守卫) ProtectRoute
- redirect 重定向路由 Navigate
### 路由生成访问历史
  history 栈 先进后出
  replace redirect 跳转，会替换当前的历史记录 
### 单页应用
- 传统的开发是多页的，基于http 请求，每次url 发生改变后，去服务器重新请求整个页面。
  体验不好，页面会白一下
- 单页应用 react-router-dom html5 history 
  前端路由
  路由改变后
  前端会收到一个事件，将匹配的新路由显示在页面上

## typescript 
JavaScript 超级，强类型静态语言
- 安装 ts
  npm install -g typescript
- ts 的优点
  - 静态类型
  - 边写边检查bug 
  - 编译时检查类型错误



































































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
    s4吃BEQX 3456789-=00,
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

## JWT登录
- http 无状态的
Cookie Authorization token 身份令牌
- 颁发令牌 token  
- jwt  
  pnpm i json(用户身份对象)web(形式)token(令牌)
  用户名+密码 {id:1, name:'admin'} json 加密成一个token 
  请求时，再传过来 服务器端 decode 得到用户对象，
  - sign方法 服务器 用户对象， secret, 过期时间 给前端颁发token
  - decode方法，解析请求头 Authorization 服务器拿到用户对象 

## api 后端接口项目
- nest new posts 
  高度模块化、依赖注入特性的企业级开发框架
- 数据库 
### prisma  ORM
将数据库映射成对象
Table -> 类
row -> 实例
props -> props
psql/mysql sql 太专业了，prisma 翻译官 
后端 -》              prisma ->     sql 
User(service class)   ===          User(table)
create            ===            Insert 
findMany        ===            Select 
### ORM ObjectRelationMapping 对象关系映射
