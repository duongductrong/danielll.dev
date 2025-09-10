#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require("fs");
const path = require("path");

// Configuration
const BLOCKS_DIR = path.join(process.cwd(), "src/features/craft/blocks");
const OUTPUT_FILE = path.join(
  process.cwd(),
  "src/features/craft/registry.generated.ts"
);

// Helper function to convert filename to camelCase
const toCamelCase = (filename) => {
  return filename
    .replace(/[-_]/g, " ")
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
};

// Helper function to convert camelCase to PascalCase
const toPascalCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Generate registry from blocks directory
const generateRegistry = () => {
  console.log("🔄 Generating craft registry...");

  // Read all .tsx files from blocks directory
  const blockFiles = fs
    .readdirSync(BLOCKS_DIR)
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => ({
      filename: file,
      name: file.replace(".tsx", ""),
      camelCase: toCamelCase(file.replace(".tsx", "")),
      pascalCase: toPascalCase(toCamelCase(file.replace(".tsx", ""))),
    }));

  if (blockFiles.length === 0) {
    console.log("❌ No block files found in", BLOCKS_DIR);
    return;
  }

  console.log(
    `📦 Found ${blockFiles.length} blocks:`,
    blockFiles.map((b) => b.name).join(", ")
  );

  // Generate dynamic imports
  const imports = blockFiles
    .map(
      (block) =>
        `const ${block.pascalCase} = dynamic(() => import("./blocks/${block.name}"));`
    )
    .join("\n");

  // Generate component registry
  const componentRegistry = blockFiles
    .map((block) => `  ${block.camelCase}: ${block.pascalCase},`)
    .join("\n");

  // Generate source code registry
  const sourceCodeEntries = blockFiles
    .map((block) => {
      const filePath = path.join(BLOCKS_DIR, block.filename);
      const sourceCode = fs.readFileSync(filePath, "utf8");

      // Escape backticks and template literals
      const escapedCode = sourceCode
        .replace(/\\/g, "\\\\")
        .replace(/`/g, "\\`")
        .replace(/\$\{/g, "\\${");

      return `  ${block.camelCase}: \`${escapedCode}\`,`;
    })
    .join("\n");

  // Generate the complete registry file
  const registryContent = `// This file is auto-generated. Do not edit manually.
// Run 'npm run generate:registry' to regenerate.

import dynamic from "next/dynamic";

// Dynamic imports for all blocks
${imports}

// Registry of preview components
export const registryPreviewComponents = {
${componentRegistry}
};

// Registry of source code for code viewer
export const registrySourceCode: Record<string, string> = {
${sourceCodeEntries}
};

// Export block metadata
export const registryMetadata = {
${blockFiles
  .map(
    (block) => `  ${block.camelCase}: {
    name: "${block.name}",
    filename: "${block.filename}",
    component: "${block.pascalCase}",
  },`
  )
  .join("\n")}
};

// Export available block keys
export const availableBlocks = [
${blockFiles.map((block) => `  "${block.camelCase}",`).join("\n")}
] as const;

export type BlockKey = typeof availableBlocks[number];
`;

  // Write the generated file
  fs.writeFileSync(OUTPUT_FILE, registryContent, "utf8");

  console.log("✅ Registry generated successfully at", OUTPUT_FILE);
  console.log(`📊 Generated ${blockFiles.length} component entries`);
};

// Run the generator
try {
  generateRegistry();
} catch (error) {
  console.error("❌ Error generating registry:", error);
  process.exit(1);
}
