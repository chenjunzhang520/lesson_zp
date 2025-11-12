document.addEventListener('DOMContentLoaded', function() {
    const changeColorBtn = document.getElementById('changeColorBtn');
    
    changeColorBtn.addEventListener('click', function() {
        // 获取当前活动标签页
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            const activeTab = tabs[0];
            
            // 向content script注入代码来改变背景颜色
            chrome.scripting.executeScript({
                target: { tabId: activeTab.id },
                function: setBackgroundColorToGreen
            });
        });
    });
    
    // 用于注入到页面的函数
    function setBackgroundColorToGreen() {
        // 改变页面根元素的背景色
        document.documentElement.style.backgroundColor = 'green';
        
        // 改变body的背景色以确保兼容性
        document.body.style.backgroundColor = 'green';
        
        // 尝试处理一些常见的内容容器
        const containers = ['.main', '#main', '.content', '#content', '.container', '#container'];
        containers.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                if (window.getComputedStyle(el).backgroundColor === 'rgba(0, 0, 0, 0)' || 
                    window.getComputedStyle(el).backgroundColor === 'transparent') {
                    el.style.backgroundColor = 'green';
                }
            });
        });
    }
});