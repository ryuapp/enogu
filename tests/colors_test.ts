import { assertEquals } from "../dev_deps.ts";
import * as c from "../src/colors.ts";

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

Deno.test("overline", () => {
  assertEquals(c.overline("enogu is colors"), "[53menogu is colors[55m");
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

Deno.test("brightBlack", () => {
  assertEquals(c.brightBlack("enogu is colors"), "[90menogu is colors[39m");
});

Deno.test("brightRed", () => {
  assertEquals(c.brightRed("enogu is colors"), "[91menogu is colors[39m");
});

Deno.test("brightGreen", () => {
  assertEquals(c.brightGreen("enogu is colors"), "[92menogu is colors[39m");
});

Deno.test("brightYellow", () => {
  assertEquals(c.brightYellow("enogu is colors"), "[93menogu is colors[39m");
});

Deno.test("brightBlue", () => {
  assertEquals(c.brightBlue("enogu is colors"), "[94menogu is colors[39m");
});

Deno.test("brightMagenta", () => {
  assertEquals(c.brightMagenta("enogu is colors"), "[95menogu is colors[39m");
});

Deno.test("brightCyan", () => {
  assertEquals(c.brightCyan("enogu is colors"), "[96menogu is colors[39m");
});

Deno.test("brightWhite", () => {
  assertEquals(c.brightWhite("enogu is colors"), "[97menogu is colors[39m");
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

Deno.test("bgBrightBlack", () => {
  assertEquals(c.bgBrightBlack("enogu is colors"), "[100menogu is colors[49m");
});

Deno.test("bgBrightRed", () => {
  assertEquals(c.bgBrightRed("enogu is colors"), "[101menogu is colors[49m");
});

Deno.test("bgBrightGreen", () => {
  assertEquals(c.bgBrightGreen("enogu is colors"), "[102menogu is colors[49m");
});

Deno.test("bgBrightYellow", () => {
  assertEquals(c.bgBrightYellow("enogu is colors"), "[103menogu is colors[49m");
});

Deno.test("bgBrightBlue", () => {
  assertEquals(c.bgBrightBlue("enogu is colors"), "[104menogu is colors[49m");
});

Deno.test("bgBrightMagenta", () => {
  assertEquals(
    c.bgBrightMagenta("enogu is colors"),
    "[105menogu is colors[49m",
  );
});

Deno.test("bgBrightCyan", () => {
  assertEquals(c.bgBrightCyan("enogu is colors"), "[106menogu is colors[49m");
});

Deno.test("bgBrightWhite", () => {
  assertEquals(c.bgBrightWhite("enogu is colors"), "[107menogu is colors[49m");
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

Deno.test("setColorEnabled", () => {
  c.setColorEnabled(false);
  assertEquals(c.getColorEnabled(), false);
  assertEquals(c.red("enogu is colors"), "enogu is colors");
  c.setColorEnabled(true);
  assertEquals(c.getColorEnabled(), true);
  assertEquals(c.red("enogu is colors"), "[31menogu is colors[39m");
});

// From here onwards, we have modified the fork from https://deno.land/std@0.209.0/fmt/colors_test.ts.
// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.

Deno.test("clamp using rgb8", function () {
  assertEquals(c.rgb8("foo bar", -10), "[38;5;0mfoo bar[39m");
});

Deno.test("truncate using rgb8", function () {
  assertEquals(c.rgb8("foo bar", 42.5), "[38;5;42mfoo bar[39m");
});

Deno.test("rgb8", function () {
  assertEquals(c.rgb8("foo bar", 42), "[38;5;42mfoo bar[39m");
});

Deno.test("bgRgb8", function () {
  assertEquals(c.bgRgb8("foo bar", 42), "[48;5;42mfoo bar[49m");
});

Deno.test("rgb24", function () {
  assertEquals(
    c.rgb24("foo bar", {
      r: 41,
      g: 42,
      b: 43,
    }),
    "[38;2;41;42;43mfoo bar[39m",
  );
});

Deno.test("rgb24 number", function () {
  assertEquals(c.rgb24("foo bar", 0x070809), "[38;2;7;8;9mfoo bar[39m");
});

Deno.test("bgRgb24", function () {
  assertEquals(
    c.bgRgb24("foo bar", {
      r: 41,
      g: 42,
      b: 43,
    }),
    "[48;2;41;42;43mfoo bar[49m",
  );
});

Deno.test("bgRgb24 number", function () {
  assertEquals(c.bgRgb24("foo bar", 0x070809), "[48;2;7;8;9mfoo bar[49m");
});

// https://github.com/chalk/strip-ansi/blob/2b8c961e75760059699373f9a69101065c3ded3a/test.js#L4-L6
Deno.test("stripAnsiCode", function () {
  assertEquals(
    c.stripAnsiCode(
      "\u001B[0m\u001B[4m\u001B[42m\u001B[31mfoo\u001B[39m\u001B[49m\u001B[24mfoo\u001B[0m",
    ),
    "foofoo",
  );
});
