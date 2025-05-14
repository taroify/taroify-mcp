[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/taroify-taroify-mcp-badge.png)](https://mseep.ai/app/taroify-taroify-mcp)

<p align="center">
  <img alt="logo" src="https://img.yzcdn.cn/vant/logo.png" width="120" style="margin-bottom: 10px;">
</p>
<h3 align="center">可靠的小程序端 Taro React UI 组件库 MCP</h3>

## 介绍

Taroify 是移动端组件库 [Vant](https://github.com/youzan/vant) 的 Taro React 版本，两者基于相同的视觉规范，提供近似一致的 API 接口，助力开发者快速搭建小程序应用。

Taroify MCP 是一项独立的 MCP（模型上下文协议）服务，旨在将 Taroify 与大模型连接起来。它使大模型能够直接从文档中检索组件、API数据。

- 直接使用 npx 运行
- 无需外部依赖，只需要 Node 环境

## Cursor 用法

Cursor Mcp 使用指南参考：<https://docs.cursor.com/context/model-context-protocol#using-mcp-tools-in-agent>

``` json
{
  "mcpServers": {
    "@taroify/mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@taroify/mcp",
      ],
      "env": {}
    }
  }
}
```
