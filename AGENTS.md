# AGENTS.md

面向在本仓库工作的 AI Agent 的项目说明（仿网易云音乐的移动端 Web App）。

## 范围

- **只改前端**：根目录 `src/`、`vite.config.js`、根 `package.json` 等。
- **不要改** [`NeteaseCloudMusicApi/`](NeteaseCloudMusicApi/)，除非用户明确要求。该目录是独立的 Node API（默认端口 `3001`）。
- 语言为 **JavaScript**；不要擅自迁 TypeScript。

## 当前技术栈

| 领域 | 选型 |
|------|------|
| 构建 | Vite 6，产物目录 `build/` |
| UI | React 19 + styled-components 5 |
| 路由 | react-router-dom v6（`Routes` / `Outlet` / hooks） |
| 状态 | Redux 4 + redux-thunk + **redux-immutable** + Immutable.js；页面多用 `connect` |
| 请求 | axios 1.x（[`src/api/config.js`](src/api/config.js) 中的 `baseURL`） |
| 包管理 | **npm**（`.npmrc` 含 `legacy-peer-deps=true`）；不要新增 `pnpm-lock.yaml` |

脚本：`npm run start` / `dev`（端口 **8080**）、`npm run build`、`npm run preview`。

## 目录与别名

```
src/
  application/   # 业务页（Recommend、Player、Search 等）及各页 store/
  baseUI/        # 基础组件（scroll、header、toast 等）
  components/    # 共享 UI（slider、list、album-detail）
  layouts/       # HomeLayout（Tab + 播放器 + 侧栏）
  routes/        # AppRoutes
  api/           # axios 与请求封装
  store/         # 根 reducer
```

Vite 别名（见 [`vite.config.js`](vite.config.js)）：

- `@` → `src/components`
- `api`、`assets`、`layouts`、`application`、`baseUI`、`utils` → 对应 `src/*`

`.js` 文件里可以写 JSX（已配置 esbuild loader）。新建文件时跟随周边现有扩展名习惯。

## 路由约定

- 「列表 + 叠层详情」：父路由渲染列表和 `<Outlet />`（Recommend / Singers / Rank / MV）。
- 导航用 `useNavigate` / `useParams`，不要用 `history` / `match` / `withRouter` / `react-router-config`。
- `NavLink` 高亮：`className={({ isActive }) => (isActive ? "selected" : undefined)}`。
- 入口 [`src/index.js`](src/index.js) 使用 React 19 的 `createRoot`。

## React 19 / 动画约束

- 每个 `CSSTransition` **必须**传 `nodeRef`，并把同一 ref 挂到直接子节点（styled-components 可以）。禁止依赖 `findDOMNode`。
- 函数组件用**参数默认值**，不要用 `Component.defaultProps`。
- 仓库仍依赖 **antd-mobile v2**（Toast / List / Button / Icon），但注意：
  - **不要再使用** antd-mobile 的 `Drawer`、`Carousel`（在 React 19 下会因 string ref / findDOMNode 崩溃）。
  - 侧栏：[`src/layouts/HomeLayout.jsx`](src/layouts/HomeLayout.jsx) 自研抽屉。
  - 轮播：[`src/components/slider/`](src/components/slider/) 自研实现。

## 状态与数据

- 业务 store 在 `application/<Feature>/store/`（`actionTypes`、`actionCreator`、`reducer`）。
- reducer 使用 Immutable（`fromJS` / `set` / `get` / `getIn`）。连接组件里常见 `.toJS()` / `.size`。
- 不要擅自迁 RTK 或去掉 Immutable，除非用户要求。
- axios 取消/错误处理要判断 `err.response` 与 `axios.isCancel`（见 [`src/api/config.js`](src/api/config.js)）。

## 样式

- 优先用 **styled-components**，与业务同目录（`style.js` / `*.style.js`）。
- 主题变量：[`src/assets/global-style.js`](src/assets/global-style.js)；皮肤通过 CSS 变量 `--USER-THEME-COLOR`。
- 移动端 rem：[`src/utils/autoflex.js`](src/utils/autoflex.js)。

## 本地接口

1. 可选：本地启动 `NeteaseCloudMusicApi` 于 `3001`（Vite 会把 `/api` 代理过去）。
2. 或修改 [`src/api/config.js`](src/api/config.js) 的 `baseURL` 指向可用接口（仓库默认已有远程地址）。

## Agent 应该 / 不应该

**应该**

- 改动处对齐现有写法（`connect`、Immutable、styled-components）。
- 改动尽量小而聚焦；仅在脚本/启动方式变化时改 README。
- 依赖、路由或 React 相关改动后：跑 `npm run build`，并冒烟主 Tab 与嵌套详情路由。

**不应该**

- 擅自升级或重构 `NeteaseCloudMusicApi`。
- 未经用户要求引入 Webpack / CRA / TypeScript / antd-mobile 5 / Redux Toolkit。
- 新增没有 `nodeRef` 的 `CSSTransition`。
- 重新引入 antd-mobile 的 Drawer / Carousel。
- 提交密钥；未要求时不要 commit；禁止擅自 force-push。
