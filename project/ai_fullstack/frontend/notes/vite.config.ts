import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
// node 需要单独添加类型声明文件
import path from 'path' // node 的内置模块  


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  "resolve": {
    alias: {
    // __dirname node 的超级变量 项目根目录
    '@': path.resolve(__dirname,'src'),
  }
  }
  
})

