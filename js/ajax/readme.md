# Ajax 数据请求
  Ajax 全称 Asynchronous（异步） JavaScript and XML （JSON）

- 流程
  - 实例化 new XMLHttpRequest();
  - open 打开一个请求
    method GET POST
    url 
    async   true 异步 false 同步
  - send 发送请求
  - 事件监听
    - onreadystatechange 状态改变事件
      status 200
      readyState 4
      JSON.parse(xhr.responseText)

  - readyState
    - 0 初始化
    - 1 打开
    - 2 发送
    - 3 接收
    - 4 完成
