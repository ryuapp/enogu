import * as esbuild from "esbuild";
import { denoPlugins } from "@luca/esbuild-deno-loader";
import { walk } from "@std/fs/walk";
import { resolve } from "@std/path/resolve";
import { basename } from "@std/path/basename";

const results: Array<{ name: string; size: number }> = [];

for await (
  const dirEntry of walk("./bundle/example", {
    exts: [".ts"],
    includeDirs: false,
  })
) {
  try {
    const result = await esbuild.build({
      entryPoints: [dirEntry.path],
      format: "esm",
      sourcemap: false,
      bundle: true,
      minify: true,
      write: false,
      platform: "node",
      plugins: [...denoPlugins({
        configPath: resolve("deno.json"),
      })],
    });

    const bundleSize = result.outputFiles.reduce(
      (total, file) => total + file.contents.length,
      0,
    );

    const fileName = basename(dirEntry.path);
    let moduleName = fileName.replace(/\.ts$/, "");

    // Convert underscore format to @scope/module format
    if (moduleName.includes("_")) {
      moduleName = "@" + moduleName.replace("_", "/");
    }

    results.push({
      name: moduleName,
      size: bundleSize,
    });
  } catch (error) {
    console.error(`Error building ${dirEntry.path}:`, error);
  }
}

await esbuild.stop();

// Sort results by size
results.sort((a, b) => a.size - b.size);

// Display results
console.log("\n📦 Bundle Size Results:\n");
console.log("Module               Size (bytes)    Size (KB)");
console.log("─".repeat(50));

for (const { name, size } of results) {
  const sizeKB = (size / 1024).toFixed(2);
  console.log(
    `${name.padEnd(20)} ${size.toString().padStart(12)} ${
      sizeKB.padStart(12)
    } KB`,
  );
}

if (results.length > 0) {
  const smallest = results[0];
  const largest = results[results.length - 1];
  console.log("\n📊 Summary:");
  console.log(`  Smallest bundle: ${smallest.name} (${smallest.size} bytes)`);
  console.log(`  Largest bundle: ${largest.name} (${largest.size} bytes)`);
  console.log(
    `\nSize difference: ${largest.size - smallest.size} bytes (${
      (
        ((largest.size - smallest.size) / smallest.size) * 100
      ).toFixed(1)
    }% larger)\n`,
  );
}
