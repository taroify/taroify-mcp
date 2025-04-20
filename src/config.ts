import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export interface Config {
  paths: {
    dataDir: string;
    componentsDir: string;
    componentsIndexPath: string;
  };
  server: {
    name: string;
    version: string;
    description: string;
  };
}

export const config: Config = {
  paths: {
    dataDir: resolve(__dirname, "./metaData"),
    componentsDir: resolve(__dirname, "./metaData/components"),
    componentsIndexPath: resolve(__dirname, "./metaData/components-index.json"),
  },
  server: {
    name: "taroify-mcp",
    version: "0.0.1",
    description: "Provides documentation and example for Taroify components",
  },
};
