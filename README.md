Banner 项目

项目简介

banner 是一个基于 Vue 3 和 Vite 构建的 H5 页面项目，用于展示三张 Banner 图片，并提供排序和点击跳转的功能。用户可以通过 URL 中的 order 参数控制 Banner 显示顺序。

环境要求

Node.js：建议版本 >= 14.0
npm 或 yarn
安装依赖

在项目根目录下运行以下命令安装依赖：

bash
复制代码
npm install
编译与发布

启动开发服务器
使用以下命令启动开发服务器，进行本地开发和调试：
bash
复制代码
npm run dev
服务器启动后，可以在浏览器中访问 http://localhost:3000 进行预览。
生产环境编译
使用以下命令对项目进行编译，以生成可用于生产环境的静态文件：
bash
复制代码
npm run build
编译完成后，生成的静态文件位于 dist 目录下，可用于上线部署。
项目发布
将 dist 文件夹中的内容上传到服务器或静态文件托管平台，完成项目的发布。
功能说明

Banner 顺序控制
项目支持通过 URL 参数 order 控制 Banner 顺序展示。order 参数为单个数字（例如 ?order=1），用于指定某一特定 Banner 显示在第一位，其余 Banner 保持默认顺序。

默认顺序：如果没有 order 参数，Banner 将按照默认顺序显示。
自定义顺序：如访问 http://example.com?order=1，则 ID 为 1 的 Banner 将显示在第一位。
