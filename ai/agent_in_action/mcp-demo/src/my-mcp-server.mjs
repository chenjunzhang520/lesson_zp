import {McpServer} from '@modelcontextprotocol/sdk/server/mcp.js';
import {StdioServerTransport} from '@modelcontextprotocol/sdk/server/stdio.js';
import {z} from 'zod';
const database = {  // 假数据，未来可以走数据库
    users: {
        '001': {id: '001', name: '王sir', email: '111@qq.com', role: 'admin' },
        '002': {id: '001', name: '王子', email: '222@qq.com', role: 'user' },
        '003': {id: '001', name: '歌神', email: '333@qq.com', role: 'user' }
    }
}

const server = new McpServer({  // 创建 MCP 服务器实例
    name: 'my-mcp-server',  // 服务器名称
    version: '1.0.0',  // 版本号
});

server.registerTool('query_user', {  // 注册工具：查询用户信息
    description: '查询数据库中的用户信息。输入用户ID，返回该用户详细信息(姓名、邮箱、角色)',
    inputSchema: z.object({
        id: z.string().describe('用户ID, 例如: 001, 002, 003'),
    }),
}, async (userId) => {  // 工具执行函数
    const user = database.users[userId];
    if (!user) {  // 用户不存在
        return {
            content: [
                {
                    type: 'text', 
                    text: `用户${userId}不存在。可用ID: 001, 002, 003`
                }
            ]
        }
    }
    return {  // 返回用户信息
        content: [
            {
                type: 'text',
                text: `用户${userId}的信息如下：姓名: ${user.name} 邮箱: ${user.email} 角色: ${user.role}`
            }
        ]
    };
})

const transport = new StdioServerTransport();  // 创建 STDIO 传输层（进程间通信通道）
await server.connect(transport);  // 连接传输层，启动服务器监听