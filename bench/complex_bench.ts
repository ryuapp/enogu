import * as colors from "https://deno.land/std/fmt/colors.ts";
import chalk from "npm:chalk";
import pico from "npm:picocolors";
import * as enogu from "../src/mod.ts";

// deno-lint-ignore no-unused-vars
let out;

Deno.bench({
  name: "deno/std",
  fn: function () {
    out = colors.inverse(colors.bold("Deno")) + " is a " +
      colors.yellow("JavaScript") + ", " +
      colors.blue("TypeScript") + ", and " +
      colors.magenta("WebAssembly") + " runtime.";
  },
});
Deno.bench({
  name: "chalk",
  fn: function () {
    out = chalk.inverse(chalk.bold("Deno")) + " is a " +
      chalk.yellow("JavaScript") + ", " +
      chalk.blue("TypeScript") + ", and " +
      chalk.magenta("WebAssembly") + " runtime.";
  },
});
Deno.bench({
  name: "picocolors",
  fn: function () {
    out = pico.inverse(pico.bold("Deno")) + " is a " +
      pico.yellow("JavaScript") + ", " +
      pico.blue("TypeScript") + ", and " +
      pico.magenta("WebAssembly") + " runtime.";
  },
});
Deno.bench({
  name: "enogu",
  fn: function () {
    out = enogu.inverse(enogu.bold("Deno")) + " is a " +
      enogu.yellow("JavaScript") + ", " +
      enogu.blue("TypeScript") + ", and " +
      enogu.magenta("WebAssembly") + " runtime.";
  },
});
