# 弹性布局

- 开关标签
- HTML文档
    一些html片段，html 文档流
    默认从上到下（块级），从左到右（行内），像水流一样流满整个页面。
- 块级/行内元素
    display:inline （行内元素）不可以设置宽高，不适合做布局
    display:block （块级元素）可以设置宽高，把兄弟挤下去，适合做容器
    display:inline-block; 适合做布局 但天生有点缺陷(换行符有宽度)
    inline-block 虽好，可不要贪杯，有没有别的方案？实现多列式布局？
- 布局 css提供
    两列式布局 切换display inline-block
    即不会把兄弟挤下去， 同时还可以设置宽高
- 盒模型