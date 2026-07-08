import { tool } from '@langchain/core/tools';
import fs from 'node:fs/promises';
// 判断路径的合法性 路径的拼接 ... 
import path from 'node:path'; // node 内置的 path 模块
import { spawn } from 'node:child_process';
import { z } from 'zod'; 

// I/O 工具
// 读文件
const readFileTool = tool(
    async({ filePath }) => {   // 功能函数
        const content = await fs.readFile(filePath, 'utf-8');
        // 时刻反馈Agent 执行消息
        // Agent 任务可能很复杂,很耗时，需要给用户反馈 用户可能
        // 太久没有看到反馈， 退出
        console.log(`[工具调用] read_file(${filePath})
        成功读取 ${content.length} 字节`)
        return content;
    },
    {
        name: 'read_file',
        description: `用此工具来读取文件内容，当用户要求读取文件、
        查看代码、分析文件内容时，调用此工具。输入文件路径（
        可以是相对路径或绝对路径）`,
        schema: z.object({
            filePath: z.string().describe('要读取的文件路径')
        })
    }
)

// 写文件
const writeFileTool = tool(
    // path 模块 专门的路径模块 Agent执行正确服务 
    // path 路径  /src/all-tools.mjs 路径模块
    async({ filePath, content }) => {
        // 1. 确认路径是否在当前工作目录下
        // 2. 写入文件，utf-8 
        // 3. 容错处理
        try {
            const dir = path.dirname(filePath);
            console.log(dir, '目录');
            // 已存在 目录不创建 
            // 递归创建 /a/b/c/123.js
            await fs.mkdir(dir, { recursive: true });
            // 写入文件
            await fs.writeFile(filePath, content, 'utf-8');
            console.log(`[工具调用] write_file(${filePath})
            成功写入 ${content.length} 字节`)
            return `成功写入 ${filePath}`;      
        } catch (error) {
            console.log(`[工具调用] write_file(${filePath})
            错误： ${error.message}`)
            return `写入文件失败： ${error.message}`;
        }
    },
    {
        name: 'write_file',
        description: '向指定路径写入文件内容，自动创建目录',
        schema: z.object({
            filePath: z.string().describe('文件路径'),
            content: z.string().describe('要写入的文件内容')
        })
    }
)

// 列出目录内容工具 
const listDirectoryTool = tool(
    async ({ directoryPath }) => {
        // 后端以稳定为主 
        try {
            // 列出目录下的所有文件和文件夹
            const files = await fs.readdir(directoryPath);
            console.log(`[工具调用] list_directory(${directoryPath})
            成功列出 ${files.length} 个文件和文件夹`)
            return `目录内容： \n ${files.map(file => file.name).join('\n')}`;
        } catch(err) {
            console.log(`[工具调用] list_directory(${directoryPath})
            错误： ${err.message}`)
            return `列出目录内容失败： ${err.message}`;
        }
    },
    {
        name: 'list_directory',
        description: '列出指定目录下的所有文件和文件夹',
        schema: z.object({
            directoryPath: z.string().describe('目录路径')
        })
    }
)

// 执行命令工具 (带实时输出)
const executeCommandTool = tool(
    async ({ command, directoryPath }) => {},
    {
        name: 'execute_command',
        description: '执行系统命令，支持指定工作目录，命令显示输出',
        schema: z.object({
            command: z.string().describe('要执行的命令'),
            directoryPath: z.string().describe('工作目录(推荐指定)')
        })
    }
)