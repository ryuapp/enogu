// Copyright 2023-2024 ryu. All rights reserved. MIT license.
import { build, emptyDir } from "@deno/dnt";

await emptyDir("./npm");

await build({
  entryPoints: ["./src/colors.ts", {
    name: "./tiny",
    path: "./src/tiny.ts",
  }],
  outDir: "./npm",
  shims: {
    deno: {
      test: "dev",
    },
  },
  package: {
    name: "enogu",
    version: Deno.args[0],
    description: "Painting your terminal with colors",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/ryuapp/enogu.git",
    },
    bugs: {
      url: "https://github.com/ryuapp/enogu/issues",
    },
  },
  postBuild() {
    // steps to run after building and before running the tests
    Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("src/README.md", "npm/README.md");
  },
});
