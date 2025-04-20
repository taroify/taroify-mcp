#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerTaroifyTools } from "./tools/components.js";

async function startMcpServer() {
  const server = new McpServer({
    name: "noah-mcp",
    version: "0.0.1",
    description: "Provides documentation and example for Taroify components",
  });

  console.log("服务启动成功");

  registerTaroifyTools(server);

  const transport = new StdioServerTransport();
  await server.connect(transport);
}

startMcpServer().catch((error) => {
  console.error("服务启动失败:", error);
  process.exit(1);
});
