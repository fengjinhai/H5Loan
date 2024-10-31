# h5贷超 项目

## 项目简介
`banner` 是一个基于 Vue 3 和 Vite 构建的 H5 页面项目，展示了三张 Banner 图片，支持通过 URL 参数控制 Banner 的显示顺序，并提供点击跳转功能。

## 环境要求
- **Node.js**：推荐使用 14.0 或更高版本
- **npm** 或 **yarn**：包管理工具

## 安装步骤

### 1. 安装依赖
在项目根目录下运行以下命令安装所需的依赖：

```bash
npm install
```

### 2. 启动开发服务器
使用以下命令启动本地开发服务器，进行本地开发和调试：

```bash
npm run dev
```
服务器启动后，默认在 http://localhost:3000 进行预览。修改代码时页面会自动刷新，方便进行实时开发。

### 3. 打包 生产环境构建

```bash
npm run build
```
### 4. 启动开发服务器
将 dist 文件夹中的内容上传到你的服务器或静态文件托管平台，即可完成项目上线

## 功能说明

### Banner 顺序控制

项目支持通过 URL 中的 order 参数控制 Banner 的显示顺序。order 参数为一个单独的数字，例如 ?order=1 表示将 ID 为 1 的 Banner 显示在首位，其余 Banner 保持默认顺序。

默认顺序：当不指定 order 参数时，Banner 将按默认顺序 1, 2, 3 显示。
自定义顺序：通过在 URL 中添加 order 参数并指定一个 Banner ID 值（例如 http://xxxxxx?order=1），可以将指定的 Banner 展示在第一位。
示例：


