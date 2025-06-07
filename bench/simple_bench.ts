// Copyright 2023-2025 ryu. All rights reserved. MIT license.
import * as colors from "@std/fmt/colors";
import chalk from "chalk";
import pico from "picocolors";
import * as enogu from "@ryu/enogu";

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
