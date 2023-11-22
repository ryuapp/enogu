import { build, emptyDir } from "https://deno.land/x/dnt@0.38.1/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./src/mod.ts", {
    name: "./tiny",
    path: "./src/tiny.ts",
  }],
  outDir: "./npm",
  shims: {
    deno: true,
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
    Deno.copyFileSync("README.md", "npm/README.md");
  },
});
