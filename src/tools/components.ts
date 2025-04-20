import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import {
  retrieveComponentDocumentation,
  fetchComponentApiDetails,
  fetchComponentExamples,
  fetchComponentRegistry,
} from "../services/component.service.js";

/**
 * 注册组件相关工具到MCP服务器
 */
export function registerTaroifyTools(server: McpServer): void {
  // 列出所有组件
  server.tool(
    "list-components",
    "Lists all available Taroify components",
    async () => {
      const components = await fetchComponentRegistry();
      return {
        content: [
          {
            type: "text",
            text: components.map((c) => c.name).join(", "),
          },
        ],
      };
    }
  );

  // 获取组件文档
  server.tool(
    "get-component-docs",
    "Gets detailed documentation for a specific component",
    { componentName: z.string() },
    async (args) => {
      const documentation = await retrieveComponentDocumentation(
        args.componentName
      );
      return {
        content: [
          {
            type: "text",
            text: documentation,
          },
        ],
      };
    }
  );

  // 获取组件属性文档
  server.tool(
    "get-component-props",
    "Gets the props and API documentation for a specific component",
    { componentName: z.string() },
    async (args) => {
      const propsSection = await fetchComponentApiDetails(args.componentName);
      return {
        content: [
          {
            type: "text",
            text: propsSection,
          },
        ],
      };
    }
  );

  // 列出组件示例
  server.tool(
    "list-component-example",
    "Lists all example available for a specific component with descriptions",
    { componentName: z.string() },
    async (args) => {
      const examplesMarkdown = await fetchComponentExamples(args.componentName);
      return {
        content: [
          {
            type: "text",
            text: examplesMarkdown,
          },
        ],
      };
    }
  );
}
