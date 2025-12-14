import { walk } from "@std/fs/walk";
import { basename } from "@std/path/basename";

const results: Array<{ name: string; size: number }> = [];

for await (
  const dirEntry of walk("./bundle/example", {
    exts: [".ts"],
    includeDirs: false,
  })
) {
  try {
    const result = await Deno.bundle({
      entrypoints: [dirEntry.path],
      format: "esm",
      minify: true,
      write: false,
    });

    if (!result.success) {
      console.error(result.errors);
      throw Error("Error");
    }

    const bundleSize = result.outputFiles!.reduce(
      (total, file) => total + file.contents!.length,
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
