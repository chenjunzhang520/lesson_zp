// document 文档对象 顶级的  dom树
// dom 事件监听
const panels = document.querySelectorAll('.panel');
// JS 中除了string, number, boolean, null, undefined, 其他的都是object
// 对象的一个子类
// console.log(
//     panels,panels[0],
//     typeof panels[0], // 瞎的
//     // [object HTMLDivElement]
//     Object.prototype.toString.call(panels[0])
// );
panels.forEach(function(panel) {
    // console.log(panel);
    // 事件监听需要在具体元素上
    panel.addEventListener('click', function() {
        // 点击当前项添加 active 类名
        const cur = document.querySelector('.active');
        if (cur) {
            cur.classList.remove('active');
        }
        panel.classList.add('active');
    })
})
