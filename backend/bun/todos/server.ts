// 任务资源
// ts = js + 强类型
// 自定义类型对象 接口
interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}
// 资源
const todos: Todo[] = [
    {
        id: "1",
        title: "吃饭",
        completed: false,
        createdAt: new Date()
    },
    {
        id: "2",
        title: "睡觉",
        completed: false,
        createdAt: new Date()
    },
    {
        id: "3",
        title: "学习",
        completed: false,
        createdAt: new Date()
    }
]
// 内置了 高性能的服务器 
const server = Bun.serve({
    port: 8080, // 127.0.0.1:8080
    // ip 对应一台服务器 ，不同的端口提供不同的服务
    // http 服务， mail 服务， 音乐服务
    // http server 处于伺服状态 http 是基于请求req响应response的协议
    // 用户通过浏览器输入url 发送一个请求(req对象 n个)
    // server fetch 函数 Bun.serve的内置方法，所有的请求都会在这里处理
    async fetch(req) {
        // 门户放开所有请求
        const headers = {
            'Access-Control-Allow-Origin': '*',
        }
        // 异步任务， 控制流程 await 
        console.log(req);
        // http://baidu.com:port/pathname/:params?a=1&n=2
        const url = new URL(req.url); // 用户访问的地址
        if(req.method === 'GET' && url.pathname === "/todos") {
            return Response.json(todos, {headers});
        }
        // url.pathname string  startsWith
        // todos/:id 详情 
        if(req.method === 'GET' && url.pathname.startsWith("/todos/")) {
            const id = url.pathname.split("/")[2];
            const todo = todos.find((t) => t.id == id)
            console.log(todo,'.....');
            return Response.json(todo, {headers});
        }
        return Response.json({msg:'hello world'});
    }
})
