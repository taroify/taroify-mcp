import { existsSync, statSync, readdirSync, readFileSync } from "node:fs";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import downloadRepo from "./downloadRepo";

type ComponentData = {
  name: string;
  dirName: string;
  documentation: string;
  apiSection: string;
  example: Record<string, string>;
};

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = resolve(__dirname, "../metaData");
const repoDir = resolve(__dirname, "../.repo");
const exampleTsxPath: string[] = [];

const toPascalCase = (str) => {
  return str
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
};

const removeFrontmatter = (content) => {
  return content.replace(/^---\n([\s\S]*?)\n---\n/, "");
};

const extractApiSection = (markdown) => {
  const apiIndex = markdown.indexOf("\n## API\n");

  if (apiIndex !== -1) {
    const startPos = apiIndex + 1;
    let endPos = markdown.length;

    const nextHeadingMatch = markdown.slice(startPos).match(/\n## [^#]/);

    if (nextHeadingMatch) {
      endPos = startPos + nextHeadingMatch.index;
    }

    return markdown.slice(startPos, endPos).trim();
  }

  return null;
};

const getFiles = (dir: string) => {
  const stat = statSync(dir);
  if (stat.isDirectory()) {
    const dirs = readdirSync(dir);
    dirs.forEach((value) => {
      getFiles(join(dir, value));
    });
  } else if (stat.isFile() && dir.endsWith(".tsx")) {
    exampleTsxPath.push(dir);
  }
};

const extractExamples = (componentName, dirName) => {
  const example: { source: string; code: string }[] = exampleTsxPath
    .filter((fileName) => fileName.includes(`/${dirName}/index.tsx`))
    .map((file) => {
      return {
        source: dirName,
        code: readFileSync(file, "utf-8").trim(),
      };
    });
  const exampleMap = {};
  example.forEach((example) => {
    exampleMap[example.source] = example.code;
  });
  return exampleMap;
};

const processComponent = async (componentsPath, dirName) => {
  const componentPath = join(componentsPath, dirName);
  const mdPath = join(componentPath, "README.md");
  const componentName = toPascalCase(dirName);

  const componentData: ComponentData = {
    name: componentName,
    dirName: dirName,
    documentation: "",
    apiSection: "",
    example: {},
  };

  try {
    const docContent = await readFile(mdPath, "utf-8");
    componentData.documentation = removeFrontmatter(docContent);
    componentData.apiSection = extractApiSection(componentData.documentation);
    componentData.example = extractExamples(componentName, dirName);
    return componentData;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const extractAllData = async () => {
  await mkdir(dataDir, { recursive: true });

  const componentsPath = join(repoDir, "core/src");
  getFiles(".repo/demo/src/pages");

  if (!existsSync(componentsPath)) {
    console.error("The 'core/src' directory was not found.");
    await downloadRepo();
    process.exit(1);
  }

  const entries = await readdir(componentsPath, { withFileTypes: true });
  const componentDirs = entries.filter(
    (entry) =>
      entry.isDirectory() &&
      !entry.name.startsWith("_") &&
      entry.name !== "utils" &&
      entry.name !== "styles" &&
      entry.name !== "white-space" &&
      entry.name !== "button-base" &&
      entry.name !== "col" &&
      entry.name !== "hooks" &&
      entry.name !== "input" &&
      entry.name !== "placeholder" &&
      entry.name !== "row" &&
      entry.name !== "sheet" &&
      entry.name !== "textarea" &&
      entry.name !== "transition"
  );

  const components: Record<string, ComponentData> = {};
  let processedCount = 0;

  for (const entry of componentDirs) {
    const componentData: ComponentData | null = await processComponent(
      componentsPath,
      entry.name
    );
    if (componentData) {
      components[componentData.name] = componentData;
      processedCount++;
    }
  }

  const metaData = {
    generatedAt: new Date().toISOString(),
    componentCount: processedCount,
    version: "1.0.0",
  };

  const componentsIndex = Object.values(components).map((c: any) => ({
    name: c.name,
    dirName: c.dirName,
  }));

  await writeFile(
    join(dataDir, "components-index.json"),
    JSON.stringify(componentsIndex, null, 2)
  );

  const componentsDataDir = join(dataDir, "components");
  await mkdir(componentsDataDir, { recursive: true });
  for (const componentData of Object.values(components)) {
    const componentDir = join(componentsDataDir, componentData.dirName);
    await mkdir(componentDir, { recursive: true });

    await writeFile(join(componentDir, "doc.md"), componentData.documentation);

    if (componentData.apiSection) {
      await writeFile(join(componentDir, "api.md"), componentData.apiSection);
    }

    if (Object.keys(componentData.example).length > 0) {
      const exampleDir = join(componentDir, "example");
      await mkdir(exampleDir, { recursive: true });

      for (const [exampleName, exampleCode] of Object.entries(
        componentData.example
      )) {
        const extension = ".tsx";
        await writeFile(
          join(exampleDir, `${exampleName}${extension}`),
          exampleCode
        );
      }
    }
  }
};

extractAllData();
