# jm-build

前端 cil 工具

## 安装

```bash
npm install -g jm-build

```

## 为什么开发这样一个东西？

1. 为了学习使用
2. 快速搭建应用
3. 包管理工具统一使用 npm

## 为什么不采用线上拉取代码的方式？

1. 快
2. 自己维护。

## 对比 vue-cli 有那些不同？

1. 固定了统一的开发规范 插件等。对于熟悉的开发者可以快速进行开发状态


## 为什么搭建一套 不同 UI 库的 后台系统？

我们都知道，在项目中  不管是打包工具，还是你按照的一些插件，都是可以低成本的替换的，比如你安装 了 G6 ，那么也可以低成本的转为 D3。
项目中什么东西是最多的？ 业务代码，业务代码 又分 你是用什么框架开发的 vue2 ? vue3? react?  ag? ...等等

所以我们模板template的项目名规范为: **UI库-PRO-前端框架**

1. `element-pro-vue` : 表示 element-ui + vue2 开发的
2. `element-plus-pro-vue`: 表示 element-plus + vue3 开发

## 特征

1. 支持 webpack 和 vite [x]
2. 支持 Vue2 Vue3 的
3. 文件路由
4. 布局系统
5. Mock 支持
6. Api 自动引入
7. 组件自动引入
8. 图标自动引入
9. VueUse 支持
10. TypeScript 的
11. UnoCss 的
12. 暗黑模式支持
13. SWR 请求支持
14. pinia 状态管理
15. pnpm 包管理器
16. 跳转进度条支持
17. 开发面板支持
18. 插件自动加载支持
19. Vitest 单元测试支持
20. 支持 Markdown 渲染
21. 路径别名支持
22. 命令行自动创建与删除
23. i18n 国际化支持
24. 漂亮的 404 页 支持
25. tsx 支持
26. gzip 资源压缩支持
27. 环境变量配置支持
28. 统一的代码规范与风格支持
29. 生产环境自动移除开发日志
30. defineOptions 支持
31. echarts 支持
32. 全局通用 toast 通知
33. 全局通用 axios 请求封装
34. 自动生成环境变量类型声明
35. renovate 自动更新依赖
36. 自动版本更新并生成 CHANGELOG
37. 最快最小的 dockerfile 静态 go 服务
38. base 安全的路径解析
39. lightningcss 支持
40. vite 配置层支持 (实验性)