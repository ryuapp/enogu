import { assertEquals } from "../dev_deps.ts";
import * as c from "../src/tiny.ts";

Deno.test("reset", () => {
  assertEquals(c.reset("enogu is colors"), "[0menogu is colors[0m");
});

Deno.test("bold", () => {
  assertEquals(c.bold("enogu is colors"), "[1menogu is colors[22m");
});

Deno.test("dim", () => {
  assertEquals(c.dim("enogu is colors"), "[2menogu is colors[22m");
});

Deno.test("italic", () => {
  assertEquals(c.italic("enogu is colors"), "[3menogu is colors[23m");
});

Deno.test("underline", () => {
  assertEquals(c.underline("enogu is colors"), "[4menogu is colors[24m");
});

Deno.test("inverse", () => {
  assertEquals(c.inverse("enogu is colors"), "[7menogu is colors[27m");
});

Deno.test("hidden", () => {
  assertEquals(c.hidden("enogu is colors"), "[8menogu is colors[28m");
});

Deno.test("strikethrough", () => {
  assertEquals(c.strikethrough("enogu is colors"), "[9menogu is colors[29m");
});

Deno.test("black", () => {
  assertEquals(c.black("enogu is colors"), "[30menogu is colors[39m");
});

Deno.test("red", () => {
  assertEquals(c.red("enogu is colors"), "[31menogu is colors[39m");
});

Deno.test("green", () => {
  assertEquals(c.green("enogu is colors"), "[32menogu is colors[39m");
});

Deno.test("yellow", () => {
  assertEquals(c.yellow("enogu is colors"), "[33menogu is colors[39m");
});

Deno.test("blue", () => {
  assertEquals(c.blue("enogu is colors"), "[34menogu is colors[39m");
});

Deno.test("magenta", () => {
  assertEquals(c.magenta("enogu is colors"), "[35menogu is colors[39m");
});

Deno.test("cyan", () => {
  assertEquals(c.cyan("enogu is colors"), "[36menogu is colors[39m");
});

Deno.test("white", () => {
  assertEquals(c.white("enogu is colors"), "[37menogu is colors[39m");
});

Deno.test("gray", () => {
  assertEquals(c.gray("enogu is colors"), "[90menogu is colors[39m");
});

Deno.test("bgBlack", () => {
  assertEquals(c.bgBlack("enogu is colors"), "[40menogu is colors[49m");
});

Deno.test("bgRed", () => {
  assertEquals(c.bgRed("enogu is colors"), "[41menogu is colors[49m");
});

Deno.test("bgGreen", () => {
  assertEquals(c.bgGreen("enogu is colors"), "[42menogu is colors[49m");
});

Deno.test("bgYellow", () => {
  assertEquals(c.bgYellow("enogu is colors"), "[43menogu is colors[49m");
});

Deno.test("bgBlue", () => {
  assertEquals(c.bgBlue("enogu is colors"), "[44menogu is colors[49m");
});

Deno.test("bgMagenta", () => {
  assertEquals(c.bgMagenta("enogu is colors"), "[45menogu is colors[49m");
});

Deno.test("bgCyan", () => {
  assertEquals(c.bgCyan("enogu is colors"), "[46menogu is colors[49m");
});

Deno.test("bgWhite", () => {
  assertEquals(c.bgWhite("enogu is colors"), "[47menogu is colors[49m");
});

Deno.test("bgGray", () => {
  assertEquals(c.bgGray("enogu is colors"), "[100menogu is colors[49m");
});

Deno.test("single color", () => {
  assertEquals(c.red("enogu is colors"), "[31menogu is colors[39m");
});

Deno.test("complex color", () => {
  assertEquals(
    c.bgBlue(c.red("enogu is colors")),
    "[44m[31menogu is colors[39m[49m",
  );
});
