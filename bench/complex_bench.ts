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
    out = colors.inverse(colors.bold("Deno")) + " is a " +
      colors.yellow("JavaScript") + ", " +
      colors.blue("TypeScript") + ", and " +
      colors.magenta("WebAssembly") + " runtime.";
  },
});
Deno.bench({
  name: "chalk",
  fn: () => {
    out = chalk.inverse(chalk.bold("Deno")) + " is a " +
      chalk.yellow("JavaScript") + ", " +
      chalk.blue("TypeScript") + ", and " +
      chalk.magenta("WebAssembly") + " runtime.";
  },
});
Deno.bench({
  name: "picocolors",
  fn: () => {
    out = pico.inverse(pico.bold("Deno")) + " is a " +
      pico.yellow("JavaScript") + ", " +
      pico.blue("TypeScript") + ", and " +
      pico.magenta("WebAssembly") + " runtime.";
  },
});
Deno.bench({
  name: "enogu",
  fn: () => {
    out = enogu.inverse(enogu.bold("Deno")) + " is a " +
      enogu.yellow("JavaScript") + ", " +
      enogu.blue("TypeScript") + ", and " +
      enogu.magenta("WebAssembly") + " runtime.";
  },
});
