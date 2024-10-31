import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // 允许局域网设备访问
    port: 3000,      // 你可以指定一个端口（例如3000）
    open: true,      // 启动时自动在默认浏览器中打开
    cors: true,      // 如果你需要处理跨域问题
  }
})
