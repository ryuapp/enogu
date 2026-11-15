import * as colors from "@std/fmt/colors";
import chalk from "chalk";
import pico from "picocolors";
import * as enogu from "@ryu/enogu";

// deno-lint-ignore no-unused-vars
let out;

Deno.bench({
  name: "deno/std",
  fn: () => {
    out = colors.red("a" + colors.blue("b") + "c" + colors.green("d") + "e");
  },
});
Deno.bench({
  name: "chalk",
  fn: () => {
    out = chalk.red("a" + chalk.blue("b") + "c" + chalk.green("d") + "e");
  },
});
Deno.bench({
  name: "picocolors",
  fn: () => {
    out = pico.red("a" + pico.blue("b") + "c" + pico.green("d") + "e");
  },
});
Deno.bench({
  name: "enogu",
  fn: () => {
    out = enogu.red("a" + enogu.blue("b") + "c" + enogu.green("d") + "e");
  },
});
