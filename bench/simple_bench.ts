// Copyright 2023-2024 ryu. All rights reserved. MIT license.
import * as colors from "jsr:@std/fmt/colors";
import chalk from "npm:chalk";
import pico from "npm:picocolors";
import * as enogu from "../src/colors.ts";

// deno-lint-ignore no-unused-vars
let out;

Deno.bench({
  name: "deno/std",
  fn: () => {
    out = colors.red(
      "Deno is a JavaScript, TypeScript, and WebAssembly runtime.",
    );
  },
});
Deno.bench({
  name: "chalk",
  fn: () => {
    out = chalk.red(
      "Deno is a JavaScript, TypeScript, and WebAssembly runtime.",
    );
  },
});
Deno.bench({
  name: "picocolors",
  fn: () => {
    out = pico.red(
      "Deno is a JavaScript, TypeScript, and WebAssembly runtime.",
    );
  },
});
Deno.bench({
  name: "enogu",
  fn: () => {
    out = enogu.red(
      "Deno is a JavaScript, TypeScript, and WebAssembly runtime.",
    );
  },
});
