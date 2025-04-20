import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { config } from "../config.js";
import type { IComponentIndex } from "../types/component.js";
import { logService } from "../utils/logger.js";

export const fetchComponentRegistry = async (): Promise<IComponentIndex[]> => {
  try {
    const indexData = await readFile(config.paths.componentsIndexPath, "utf-8");
    return JSON.parse(indexData);
  } catch (error: any) {
    logService.error(error.message);
    return [];
  }
};

export const locateComponentByName = async (
  componentName: string
): Promise<IComponentIndex | undefined> => {
  const components = await fetchComponentRegistry();
  return components.find(
    (c) =>
      c.name.toLowerCase() === componentName.toLowerCase() ||
      c.dirName.toLowerCase() === componentName.toLowerCase()
  );
};

export const retrieveComponentDocumentation = async (
  componentName: string
): Promise<string> => {
  const component = await locateComponentByName(componentName);

  if (!component) {
    return `Documentation for component "${componentName}" not found`;
  }

  const docPath = join(config.paths.componentsDir, component.dirName, "doc.md");

  try {
    if (existsSync(docPath)) {
      return await readFile(docPath, "utf-8");
    } else {
      return `Documentation for ${component.name} not found`;
    }
  } catch (error: any) {
    logService.error(`${component.name}: ${error.message}`);
    return error.message;
  }
};

export const fetchComponentApiDetails = async (
  componentName: string
): Promise<string> => {
  const component = await locateComponentByName(componentName);

  if (!component) {
    return `API documentation for component "${componentName}" not found`;
  }

  try {
    const apiPath = join(
      config.paths.componentsDir,
      component.dirName,
      "api.md"
    );

    if (existsSync(apiPath)) {
      return await readFile(apiPath, "utf-8");
    }
    return `API documentation for ${component.name} not found`;
  } catch (error: any) {
    logService.error(`${component.name}: ${error.message}`);
    return error.message;
  }
};

export const fetchComponentExamples = async (
  componentName: string
): Promise<string> => {
  const component = await locateComponentByName(componentName);

  if (!component) {
    return "Component not found";
  }

  const examplesMdPath = join(
    config.paths.componentsDir,
    component.dirName,
    "example.md"
  );

  if (!existsSync(examplesMdPath)) {
    return `No example found for ${component.name}`;
  }

  try {
    return await readFile(examplesMdPath, "utf-8");
  } catch (error: any) {
    logService.error(`${component.name}: ${error.message}`);
    return component.name;
  }
};
