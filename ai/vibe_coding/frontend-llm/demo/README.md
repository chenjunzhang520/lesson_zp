# 通用原生HTML/CSS/JS项目

这是一个使用原生HTML、CSS和JavaScript构建的通用前端项目模板。该模板专注于提供干净的代码结构、现代UI设计和基本的交互功能，适合作为各类Web应用的起点。

## 📋 项目特点

- **原生技术栈**：纯HTML5、CSS3和JavaScript，不依赖任何第三方框架或库
- **响应式设计**：适配各种屏幕尺寸，从移动设备到桌面端
- **现代UI风格**：简洁优雅的界面设计，符合当代Web设计趋势
- **模块化结构**：清晰的目录组织和代码分离
- **语义化HTML**：使用适当的HTML5标签增强可访问性和SEO
- **交互功能**：包含表单验证、平滑滚动、响应式导航等基础交互
- **性能优化**：轻量级代码结构，快速加载和响应速度

## 📁 项目结构

```
project-root/
├── index.html           # 主HTML文件
├── css/                 # CSS样式目录
│   └── styles.css       # 主样式文件
├── js/                  # JavaScript目录
│   └── script.js        # 主脚本文件
├── images/              # 图片资源目录
├── assets/              # 其他静态资源目录
├── .gitignore           # Git忽略文件
└── README.md            # 项目说明文档
```

## 🚀 快速开始

### 克隆或下载项目

```bash
git clone [repository-url]  # 如果是从Git仓库克隆
# 或直接下载项目文件
```

### 运行项目

由于这是一个纯静态项目，你可以直接在浏览器中打开`index.html`文件运行。也可以使用任何静态文件服务器：

```bash
# 使用Python简单服务器（Python 3）
python -m http.server

# 或使用Node.js的http-server
npx http-server
```

然后在浏览器中访问`http://localhost:8000`（或相应的端口）。

## 🎨 技术栈

- **HTML5**：使用最新的HTML语义化标签
- **CSS3**：包含Flexbox、Grid、变量、动画等现代CSS特性
- **JavaScript (ES6+)**：使用原生JavaScript实现交互功能

## ✨ 主要功能

### 1. 响应式导航
- 桌面端水平导航
- 移动端垂直导航
- 滚动时导航栏样式变化

### 2. 表单验证
- 客户端表单验证
- 实时错误提示
- 表单提交反馈

### 3. 平滑滚动
- 导航链接点击平滑滚动
- 锚点跳转平滑过渡

### 4. 动画效果
- 元素进入视口时的淡入动画
- 交互元素的悬停效果

## 🔧 开发指南

### 修改内容

1. **HTML结构**：修改`index.html`文件中的内容以适应你的项目需求
2. **样式**：在`css/styles.css`中修改或添加样式
3. **交互**：在`js/script.js`中添加或修改JavaScript功能
4. **资源**：将图片和其他资源放入对应的目录

### 自定义颜色

可以在`styles.css`的`:root`部分修改CSS变量来自定义主题颜色：

```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --dark-color: #2c3e50;
    --light-color: #ecf0f1;
    /* 更多变量... */
}
```

### 添加新页面

如果需要添加新页面，创建新的HTML文件并确保正确链接CSS和JavaScript文件：

```html
<link rel="stylesheet" href="css/styles.css">
<script src="js/script.js"></script>
```

## 📱 浏览器兼容性

该项目支持所有现代浏览器：

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

对于旧版本浏览器，可能需要添加一些polyfill或进行特定的兼容性处理。

## 📝 许可证

该项目为开源项目，可以自由使用和修改。

## 💡 注意事项

- 该模板不包含后端功能，如果需要后端交互，可以集成任何后端技术或API
- 对于大型项目，考虑使用构建工具如Webpack、Parcel或Vite来优化开发体验和生产构建
- 根据实际项目需求，可能需要添加更多特定的功能和样式

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个项目！

---

祝您开发愉快！🎯