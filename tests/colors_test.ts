import { assertEquals } from "../dev_deps.ts";
import * as c from "../src/colors.ts";

Deno.test("reset", function () {
  assertEquals(c.reset("enogu is colors"), "[0menogu is colors[0m");
});

Deno.test("bold", function () {
  assertEquals(c.bold("enogu is colors"), "[1menogu is colors[22m");
});

Deno.test("dim", function () {
  assertEquals(c.dim("enogu is colors"), "[2menogu is colors[22m");
});

Deno.test("italic", function () {
  assertEquals(c.italic("enogu is colors"), "[3menogu is colors[23m");
});

Deno.test("underline", function () {
  assertEquals(c.underline("enogu is colors"), "[4menogu is colors[24m");
});

Deno.test("inverse", function () {
  assertEquals(c.inverse("enogu is colors"), "[7menogu is colors[27m");
});

Deno.test("hidden", function () {
  assertEquals(c.hidden("enogu is colors"), "[8menogu is colors[28m");
});

Deno.test("strikethrough", function () {
  assertEquals(c.strikethrough("enogu is colors"), "[9menogu is colors[29m");
});

Deno.test("overline", function () {
  assertEquals(c.overline("enogu is colors"), "[53menogu is colors[55m");
});

Deno.test("black", function () {
  assertEquals(c.black("enogu is colors"), "[30menogu is colors[39m");
});

Deno.test("red", function () {
  assertEquals(c.red("enogu is colors"), "[31menogu is colors[39m");
});

Deno.test("green", function () {
  assertEquals(c.green("enogu is colors"), "[32menogu is colors[39m");
});

Deno.test("yellow", function () {
  assertEquals(c.yellow("enogu is colors"), "[33menogu is colors[39m");
});

Deno.test("blue", function () {
  assertEquals(c.blue("enogu is colors"), "[34menogu is colors[39m");
});

Deno.test("magenta", function () {
  assertEquals(c.magenta("enogu is colors"), "[35menogu is colors[39m");
});

Deno.test("cyan", function () {
  assertEquals(c.cyan("enogu is colors"), "[36menogu is colors[39m");
});

Deno.test("white", function () {
  assertEquals(c.white("enogu is colors"), "[37menogu is colors[39m");
});

Deno.test("gray", function () {
  assertEquals(c.gray("enogu is colors"), "[90menogu is colors[39m");
});

Deno.test("brightBlack", function () {
  assertEquals(c.brightBlack("enogu is colors"), "[90menogu is colors[39m");
});

Deno.test("brightRed", function () {
  assertEquals(c.brightRed("enogu is colors"), "[91menogu is colors[39m");
});

Deno.test("brightGreen", function () {
  assertEquals(c.brightGreen("enogu is colors"), "[92menogu is colors[39m");
});

Deno.test("brightYellow", function () {
  assertEquals(c.brightYellow("enogu is colors"), "[93menogu is colors[39m");
});

Deno.test("brightBlue", function () {
  assertEquals(c.brightBlue("enogu is colors"), "[94menogu is colors[39m");
});

Deno.test("brightMagenta", function () {
  assertEquals(c.brightMagenta("enogu is colors"), "[95menogu is colors[39m");
});

Deno.test("brightCyan", function () {
  assertEquals(c.brightCyan("enogu is colors"), "[96menogu is colors[39m");
});

Deno.test("brightWhite", function () {
  assertEquals(c.brightWhite("enogu is colors"), "[97menogu is colors[39m");
});

Deno.test("bgBlack", function () {
  assertEquals(c.bgBlack("enogu is colors"), "[40menogu is colors[49m");
});

Deno.test("bgRed", function () {
  assertEquals(c.bgRed("enogu is colors"), "[41menogu is colors[49m");
});

Deno.test("bgGreen", function () {
  assertEquals(c.bgGreen("enogu is colors"), "[42menogu is colors[49m");
});

Deno.test("bgYellow", function () {
  assertEquals(c.bgYellow("enogu is colors"), "[43menogu is colors[49m");
});

Deno.test("bgBlue", function () {
  assertEquals(c.bgBlue("enogu is colors"), "[44menogu is colors[49m");
});

Deno.test("bgMagenta", function () {
  assertEquals(c.bgMagenta("enogu is colors"), "[45menogu is colors[49m");
});

Deno.test("bgCyan", function () {
  assertEquals(c.bgCyan("enogu is colors"), "[46menogu is colors[49m");
});

Deno.test("bgWhite", function () {
  assertEquals(c.bgWhite("enogu is colors"), "[47menogu is colors[49m");
});

Deno.test("bgGray", function () {
  assertEquals(c.bgGray("enogu is colors"), "[100menogu is colors[49m");
});

Deno.test("bgBrightBlack", function () {
  assertEquals(c.bgBrightBlack("enogu is colors"), "[100menogu is colors[49m");
});

Deno.test("bgBrightRed", function () {
  assertEquals(c.bgBrightRed("enogu is colors"), "[101menogu is colors[49m");
});

Deno.test("bgBrightGreen", function () {
  assertEquals(c.bgBrightGreen("enogu is colors"), "[102menogu is colors[49m");
});

Deno.test("bgBrightYellow", function () {
  assertEquals(c.bgBrightYellow("enogu is colors"), "[103menogu is colors[49m");
});

Deno.test("bgBrightBlue", function () {
  assertEquals(c.bgBrightBlue("enogu is colors"), "[104menogu is colors[49m");
});

Deno.test("bgBrightMagenta", function () {
  assertEquals(
    c.bgBrightMagenta("enogu is colors"),
    "[105menogu is colors[49m",
  );
});

Deno.test("bgBrightCyan", function () {
  assertEquals(c.bgBrightCyan("enogu is colors"), "[106menogu is colors[49m");
});

Deno.test("bgBrightWhite", function () {
  assertEquals(c.bgBrightWhite("enogu is colors"), "[107menogu is colors[49m");
});

Deno.test("single color", function () {
  assertEquals(c.red("enogu is colors"), "[31menogu is colors[39m");
});

Deno.test("complex color", function () {
  assertEquals(
    c.bgBlue(c.red("enogu is colors")),
    "[44m[31menogu is colors[39m[49m",
  );
});
