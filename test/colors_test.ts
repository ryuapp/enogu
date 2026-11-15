import { assertEquals } from "@std/assert";
import * as c from "@ryu/enogu";
import { loadNodeColors } from "./utils.ts";

const { test } = Deno;

test("reset", () => {
  assertEquals(c.reset("enogu is colors"), "[0menogu is colors[0m");
});

test("bold", () => {
  assertEquals(c.bold("enogu is colors"), "[1menogu is colors[22m");
});

test("dim", () => {
  assertEquals(c.dim("enogu is colors"), "[2menogu is colors[22m");
});

test("italic", () => {
  assertEquals(c.italic("enogu is colors"), "[3menogu is colors[23m");
});

test("underline", () => {
  assertEquals(c.underline("enogu is colors"), "[4menogu is colors[24m");
});

test("inverse", () => {
  assertEquals(c.inverse("enogu is colors"), "[7menogu is colors[27m");
});

test("hidden", () => {
  assertEquals(c.hidden("enogu is colors"), "[8menogu is colors[28m");
});

test("strikethrough", () => {
  assertEquals(c.strikethrough("enogu is colors"), "[9menogu is colors[29m");
});

test("overline", () => {
  assertEquals(c.overline("enogu is colors"), "[53menogu is colors[55m");
});

test("black", () => {
  assertEquals(c.black("enogu is colors"), "[30menogu is colors[39m");
});

test("red", () => {
  assertEquals(c.red("enogu is colors"), "[31menogu is colors[39m");
});

test("green", () => {
  assertEquals(c.green("enogu is colors"), "[32menogu is colors[39m");
});

test("yellow", () => {
  assertEquals(c.yellow("enogu is colors"), "[33menogu is colors[39m");
});

test("blue", () => {
  assertEquals(c.blue("enogu is colors"), "[34menogu is colors[39m");
});

test("magenta", () => {
  assertEquals(c.magenta("enogu is colors"), "[35menogu is colors[39m");
});

test("cyan", () => {
  assertEquals(c.cyan("enogu is colors"), "[36menogu is colors[39m");
});

test("white", () => {
  assertEquals(c.white("enogu is colors"), "[37menogu is colors[39m");
});

test("gray", () => {
  assertEquals(c.gray("enogu is colors"), "[90menogu is colors[39m");
});

test("brightBlack", () => {
  assertEquals(c.brightBlack("enogu is colors"), "[90menogu is colors[39m");
});

test("brightRed", () => {
  assertEquals(c.brightRed("enogu is colors"), "[91menogu is colors[39m");
});

test("brightGreen", () => {
  assertEquals(c.brightGreen("enogu is colors"), "[92menogu is colors[39m");
});

test("brightYellow", () => {
  assertEquals(c.brightYellow("enogu is colors"), "[93menogu is colors[39m");
});

test("brightBlue", () => {
  assertEquals(c.brightBlue("enogu is colors"), "[94menogu is colors[39m");
});

test("brightMagenta", () => {
  assertEquals(c.brightMagenta("enogu is colors"), "[95menogu is colors[39m");
});

test("brightCyan", () => {
  assertEquals(c.brightCyan("enogu is colors"), "[96menogu is colors[39m");
});

test("brightWhite", () => {
  assertEquals(c.brightWhite("enogu is colors"), "[97menogu is colors[39m");
});

test("bgBlack", () => {
  assertEquals(c.bgBlack("enogu is colors"), "[40menogu is colors[49m");
});

test("bgRed", () => {
  assertEquals(c.bgRed("enogu is colors"), "[41menogu is colors[49m");
});

test("bgGreen", () => {
  assertEquals(c.bgGreen("enogu is colors"), "[42menogu is colors[49m");
});

test("bgYellow", () => {
  assertEquals(c.bgYellow("enogu is colors"), "[43menogu is colors[49m");
});

test("bgBlue", () => {
  assertEquals(c.bgBlue("enogu is colors"), "[44menogu is colors[49m");
});

test("bgMagenta", () => {
  assertEquals(c.bgMagenta("enogu is colors"), "[45menogu is colors[49m");
});

test("bgCyan", () => {
  assertEquals(c.bgCyan("enogu is colors"), "[46menogu is colors[49m");
});

test("bgWhite", () => {
  assertEquals(c.bgWhite("enogu is colors"), "[47menogu is colors[49m");
});

test("bgGray", () => {
  assertEquals(c.bgGray("enogu is colors"), "[100menogu is colors[49m");
});

test("bgBrightBlack", () => {
  assertEquals(
    c.bgBrightBlack("enogu is colors"),
    "[100menogu is colors[49m",
  );
});

test("bgBrightRed", () => {
  assertEquals(c.bgBrightRed("enogu is colors"), "[101menogu is colors[49m");
});

test("bgBrightGreen", () => {
  assertEquals(
    c.bgBrightGreen("enogu is colors"),
    "[102menogu is colors[49m",
  );
});

test("bgBrightYellow", () => {
  assertEquals(
    c.bgBrightYellow("enogu is colors"),
    "[103menogu is colors[49m",
  );
});

test("bgBrightBlue", () => {
  assertEquals(c.bgBrightBlue("enogu is colors"), "[104menogu is colors[49m");
});

test("bgBrightMagenta", () => {
  assertEquals(
    c.bgBrightMagenta("enogu is colors"),
    "[105menogu is colors[49m",
  );
});

test("bgBrightCyan", () => {
  assertEquals(c.bgBrightCyan("enogu is colors"), "[106menogu is colors[49m");
});

test("bgBrightWhite", () => {
  assertEquals(
    c.bgBrightWhite("enogu is colors"),
    "[107menogu is colors[49m",
  );
});

test("single color", () => {
  assertEquals(c.red("enogu is colors"), "[31menogu is colors[39m");
});

test("complex color", () => {
  assertEquals(
    c.bgBlue(c.red("enogu is colors")),
    "[44m[31menogu is colors[39m[49m",
  );
});

test("setColorEnabled", () => {
  c.setColorEnabled(false);
  assertEquals(c.getColorEnabled(), false);
  assertEquals(c.red("enogu is colors"), "enogu is colors");
  c.setColorEnabled(true);
  assertEquals(c.getColorEnabled(), true);
  assertEquals(c.red("enogu is colors"), "[31menogu is colors[39m");
});

test("nested styles restore the outer style", () => {
  const cases = [
    [c.red, c.blue, "\x1b[31ma\x1b[34mb\x1b[31mc\x1b[39m"],
    [c.bgRed, c.bgBlue, "\x1b[41ma\x1b[44mb\x1b[41mc\x1b[49m"],
    [c.bold, c.dim, "\x1b[1ma\x1b[2mb\x1b[22m\x1b[1mc\x1b[22m"],
    [c.dim, c.bold, "\x1b[2ma\x1b[1mb\x1b[22m\x1b[2mc\x1b[22m"],
    [c.red, c.red, "\x1b[31ma\x1b[31mb\x1b[31mc\x1b[39m"],
    [c.underline, c.underline, "\x1b[4ma\x1b[4mb\x1b[4mc\x1b[24m"],
  ] as const;

  for (const [outer, inner, expected] of cases) {
    assertEquals(outer("a" + inner("b") + "c"), expected);
  }

  assertEquals(
    c.red("a" + c.blue("b") + "c" + c.green("d") + "e"),
    "\x1b[31ma\x1b[34mb\x1b[31mc\x1b[32md\x1b[31me\x1b[39m",
  );
  assertEquals(
    c.red("a" + c.blue("b" + c.green("c") + "d") + "e"),
    "\x1b[31ma\x1b[34mb\x1b[32mc\x1b[34md\x1b[31me\x1b[39m",
  );
});

test("unrelated styles keep their closing sequences", () => {
  assertEquals(
    c.red("a" + c.bold("b") + "c"),
    "\x1b[31ma\x1b[1mb\x1b[22mc\x1b[39m",
  );
});

test("setColorEnabled controls nested styles", () => {
  const enabled = c.getColorEnabled();
  try {
    c.setColorEnabled(false);
    assertEquals(c.red("a" + c.blue("b") + "c"), "abc");
    c.setColorEnabled(true);
    assertEquals(c.red(""), "\x1b[31m\x1b[39m");
  } finally {
    c.setColorEnabled(enabled);
  }
});

test("closing codes at string boundaries are restored", () => {
  assertEquals(
    c.red("\x1b[39ma"),
    "\x1b[31m\x1b[31ma\x1b[39m",
  );
  assertEquals(
    c.red("a\x1b[39m"),
    "\x1b[31ma\x1b[31m\x1b[39m",
  );
  assertEquals(
    c.red("\x1b[39m\x1b[39m"),
    "\x1b[31m\x1b[31m\x1b[31m\x1b[39m",
  );
  assertEquals(
    c.bold("\x1b[22ma\x1b[22m"),
    "\x1b[1m\x1b[22m\x1b[1ma\x1b[22m\x1b[1m\x1b[22m",
  );
});

test("reset sequences remain unchanged inside styles", () => {
  assertEquals(
    c.red("a" + c.reset("b") + "c"),
    "\x1b[31ma\x1b[0mb\x1b[0mc\x1b[39m",
  );
});

const colorEnvironments: [Record<string, string>, boolean][] = [
  [{}, true],
  [{ NO_COLOR: "" }, true],
  [{ NO_COLOR: "0" }, false],
  [{ NO_COLOR: "1" }, false],
  [{ NO_COLOR: "false" }, false],
  [{ FORCE_COLOR: "" }, true],
  [{ FORCE_COLOR: "0" }, true],
  [{ FORCE_COLOR: "1" }, true],
  [{ FORCE_COLOR: "2" }, true],
  [{ FORCE_COLOR: "3" }, true],
  [{ FORCE_COLOR: "false" }, true],
  [{ NO_COLOR: "", FORCE_COLOR: "0" }, true],
  [{ NO_COLOR: "1", FORCE_COLOR: "0" }, true],
  [{ NO_COLOR: "1", FORCE_COLOR: "" }, false],
  [{ NO_COLOR: "1", FORCE_COLOR: "1" }, true],
  [{ NO_COLOR: "1", FORCE_COLOR: "false" }, true],
];

for (const [env, enabled] of colorEnvironments) {
  test(`color environment matches Deno.noColor ${JSON.stringify(env)}`, async () => {
    const colors = await loadNodeColors(env);
    assertEquals(colors.getColorEnabled(), enabled);
    assertEquals(colors.red("a"), enabled ? "\x1b[31ma\x1b[39m" : "a");
    colors.setColorEnabled(false);
    assertEquals(colors.red("a"), "a");
    colors.setColorEnabled(true);
    assertEquals(colors.getColorEnabled(), enabled);
  });
}
