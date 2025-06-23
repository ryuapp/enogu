// Copyright 2023-2025 ryu. All rights reserved. MIT license.
import denoJson from "./deno.json" with { type: "json" };
import enoguDenoJson from "./src/deno.json" with { type: "json" };
import * as esbuild from "esbuild";
import { createMinifier } from "@david/dts-minify";
import { Project, ts } from "@ts-morph/ts-morph";
import { emptyDir } from "@std/fs";

// setup
const outDir = "npm";
const fileList = ["mod"];

const entryPoints = fileList.map((file) => `${outDir}/${file}.ts`);

if (!("version" in enoguDenoJson)) {
  throw new Error("Version in deno.json is not defined.");
}

// package.json
const packageJson = {
  name: "enogu",
  version: enoguDenoJson.version,
  description: "Painting your terminal with colors",
  license: "MIT",
  repository: "ryuapp/enogu",
  type: "module",
  exports: "./mod.mjs",
  types: "./mod.d.mts",
  sideEffects: false,
  devDependencies: {},
};

// output
// cleanup
await emptyDir("./npm");

Deno.copyFileSync("LICENSE", `${outDir}/LICENSE`);
Deno.copyFileSync("src/README.md", `${outDir}/README.md`);
for (const filename of fileList) {
  Deno.copyFileSync(`src/${filename}.ts`, `${outDir}/${filename}.ts`);
}

// esm
await esbuild.build({
  entryPoints,
  format: "esm",
  outdir: `${outDir}`,
  sourcemap: false,
  bundle: true,
  minify: true,
  outExtension: { ".js": ".mjs" },
  legalComments: "eof",
});
esbuild.stop();

// generate d.ts
const project = new Project({
  compilerOptions: {
    emitDeclarationOnly: true,
    outDir,
    declaration: true,
  },
});
project.addSourceFilesAtPaths(`${outDir}/*.ts`);
await project.emit();

// minify d.ts
const decoder = new TextDecoder("utf-8");
// setup (provide a TS Compiler API object)
const minifier = createMinifier(ts);
for (const file of fileList) {
  const content = await Deno.readFile(`${outDir}/${file}.d.ts`);
  const inputText = decoder.decode(content);
  const minifiedText = minifier.minify(inputText, { keepJsDocs: true });

  Deno.writeFileSync(
    `${outDir}/${file}.d.mts`,
    new TextEncoder().encode(minifiedText),
  );
  Deno.removeSync(`${outDir}/${file}.d.ts`);
}

// package.json
const devDeps: Record<string, string> = {};
const imports: Record<string, string> = denoJson.imports;
for (const alias in imports) {
  const importName = imports[alias];
  if (importName.startsWith("npm")) {
    const name = importName.split(":")[1].split("@")[0];
    const version = importName.split("@")[1];
    devDeps[name] = version;
  }
}
packageJson.devDependencies = devDeps;
Deno.writeFile(
  `${outDir}/package.json`,
  new TextEncoder().encode(JSON.stringify(packageJson, null, 2)),
);

// cleanup
for (const filename of fileList) {
  Deno.removeSync(`${outDir}/${filename}.ts`);
}
