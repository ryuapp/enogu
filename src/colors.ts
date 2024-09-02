// Copyright 2023-2024 ryu. All rights reserved. MIT license. @license
/*
 * Painting your terminal with colors.
 * This module is compatible with fmt/colors.ts from Deno standard library.
 *
 * @module
 */

// deno-lint-ignore no-explicit-any
const { Deno, process } = globalThis as any;
const noColor = typeof Deno?.noColor === "boolean"
  ? Deno.noColor as boolean
  : typeof process !== "undefined"
  ? "NO_COLOR" in process?.env
  : false;

let enabled = !noColor;

interface Rgb {
  r: number;
  g: number;
  b: number;
}

/**
 * Set coloring to enabled or disabled
 * @param value
 */
export function setColorEnabled(value: boolean) {
  if (Deno?.noColor) {
    return;
  }

  enabled = value;
}

/** Get whether coloring is enabled or disabled */
export function getColorEnabled(): boolean {
  return enabled;
}

/**
 * Initialization of color function
 * @param open
 * @param close
 */
function init(open: number, close: number) {
  return function (str: string) {
    return enabled ? "\x1b[" + open + "m" + str + "\x1b[" + close + "m" : str;
  };
}

/**
 * Set text at reset
 * @param str text to reset
 */
export const reset: (str: string) => string = init(0, 0);

/**
 * Set text at bold
 * @param str text to bold
 */
export const bold: (str: string) => string = init(1, 22);

/**
 * Set text at dim
 * @param str text to dim
 */
export const dim: (str: string) => string = init(2, 22);

/**
 * Set text at italic
 * @param str text to italic
 */
export const italic: (str: string) => string = init(3, 23);

/**
 * Set text at underline
 * @param str text to underline
 */
export const underline: (str: string) => string = init(4, 24);

/**
 * Set text at inverse
 * @param str text to inverse
 */
export const inverse: (str: string) => string = init(7, 27);

/**
 * Set text at hidden
 * @param str text to hidden
 */
export const hidden: (str: string) => string = init(8, 28);
/**
 * Set text at strikethrough
 * @param str text to strikethrough
 */
export const strikethrough: (str: string) => string = init(9, 29);

/**
 * Set text at overline
 * @param str text to overline
 */
export const overline: (str: string) => string = init(53, 55);

/**
 * Set text at black
 * @param str text to black
 */
export const black: (str: string) => string = init(30, 39);

/**
 * Set text at red
 * @param str text to red
 */
export const red: (str: string) => string = init(31, 39);

/**
 * Set text at green
 * @param str text to green
 */
export const green: (str: string) => string = init(32, 39);

/**
 * Set text at yellow
 * @param str text to yellow
 */
export const yellow: (str: string) => string = init(33, 39);

/**
 * Set text at blue
 * @param str text to blue
 */
export const blue: (str: string) => string = init(34, 39);

/**
 * Set text at magenta
 * @param str text to magenta
 */
export const magenta: (str: string) => string = init(35, 39);

/**
 * Set text at cyan
 * @param str text to cyan
 */
export const cyan: (str: string) => string = init(36, 39);

/**
 * Set text at white
 * @param str text to white
 */
export const white: (str: string) => string = init(37, 39);

/**
 * Set text at gray
 * @param str text to gray
 */
export const gray: (str: string) => string = init(90, 39);

/**
 * Set text at bright black
 * @param str text to bright black
 */
export const brightBlack = gray;

/**
 * Set text at bright red
 * @param str text to bright red
 */
export const brightRed: (str: string) => string = init(91, 39);

/**
 * Set text at bright green
 * @param str text to bright green
 */
export const brightGreen: (str: string) => string = init(92, 39);

/**
 * Set text at bright yellow
 * @param str text to bright yellow
 */
export const brightYellow: (str: string) => string = init(93, 39);

/**
 * Set text at bright blue
 * @param str text to bright blue
 */
export const brightBlue: (str: string) => string = init(94, 39);

/**
 * Set text at bright magenta
 * @param str text to bright magenta
 */
export const brightMagenta: (str: string) => string = init(95, 39);

/**
 * Set text at bright cyan
 * @param str text to bright cyan
 */
export const brightCyan: (str: string) => string = init(96, 39);

/**
 * Set text at bright white
 * @param str text to bright white
 */
export const brightWhite: (str: string) => string = init(97, 39);

/**
 * Set background at black
 * @param str text to black
 */
export const bgBlack: (str: string) => string = init(40, 49);

/**
 * Set background at red
 * @param str background to red
 */
export const bgRed: (str: string) => string = init(41, 49);

/**
 * Set background at green
 * @param str background to green
 */
export const bgGreen: (str: string) => string = init(42, 49);

/**
 * Set background at yellow
 * @param str background to yellow
 */
export const bgYellow: (str: string) => string = init(43, 49);

/**
 * Set background at blue
 * @param str background to blue
 */
export const bgBlue: (str: string) => string = init(44, 49);

/**
 * Set background at magenta
 * @param str background to magenta
 */
export const bgMagenta: (str: string) => string = init(45, 49);

/**
 * Set background at cyan
 * @param str background to cyan
 */
export const bgCyan: (str: string) => string = init(46, 49);

/**
 * Set background at white
 * @param str background to white
 */
export const bgWhite: (str: string) => string = init(47, 49);

/**
 * Set background at gray
 * @param str background to gray
 */
export const bgGray: (str: string) => string = init(100, 49);

/**
 * Set background at bright black
 * @param str background to bright black
 */
export const bgBrightBlack = bgGray;

/**
 * Set background at bright red
 * @param str background to bright red
 */
export const bgBrightRed: (str: string) => string = init(101, 49);

/**
 * Set background at bright green
 * @param str background to bright green
 */
export const bgBrightGreen: (str: string) => string = init(102, 49);

/**
 * Set background at bright yellow
 * @param str background to bright yellow
 */
export const bgBrightYellow: (str: string) => string = init(103, 49);

/**
 * Set background at bright blue
 * @param str background to bright blue
 */
export const bgBrightBlue: (str: string) => string = init(104, 49);

/**
 * Set background at bright magenta
 * @param str background to bright magenta
 */
export const bgBrightMagenta: (str: string) => string = init(105, 49);

/**
 * Set background at bright cyan
 * @param str background to bright cyan
 */
export const bgBrightCyan: (str: string) => string = init(106, 49);

/**
 * Set background at bright white
 * @param str background to bright white
 */
export const bgBrightWhite: (str: string) => string = init(107, 49);

// From here onwards, we have modified the fork from https://deno.land/std@0.209.0/fmt/colors.ts.
// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license. @license

/**
 * Clam and truncate color codes
 * @param n
 * @param max number to truncate to
 * @param min number to truncate from
 */
function clampAndTruncate(n: number, max = 255, min = 0): number {
  return Math.trunc(Math.max(Math.min(n, max), min));
}

/**
 * Initialization of 8bit color function
 * @param open
 * @param close
 */
function init8(str: string, open: number, close: number, color: number) {
  return enabled
    ? "\x1b[" + open + ";5;" + clampAndTruncate(color) + "m" + str + "\x1b[" +
      close + "m"
    : str;
}

/**
 * Set text color using paletted 8bit colors.
 * https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit
 * @param str text color to apply paletted 8bit colors to
 * @param color code
 */
export function rgb8(str: string, color: number): string {
  return init8(str, 38, 39, color);
}

/**
 * Set background color using paletted 8bit colors.
 * https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit
 * @param str text color to apply paletted 8bit background colors to
 * @param color code
 */
export function bgRgb8(str: string, color: number): string {
  return init8(str, 48, 49, color);
}

/**
 * Initialization of 24bit color function
 * @param open
 * @param close
 */
function init24(
  str: string,
  open: number,
  close: number,
  color: number | Rgb,
) {
  if (typeof color === "number") {
    return enabled
      ? "\x1b[" + open + ";2;" + ((color >> 16) & 0xff) + ";" +
        ((color >> 8) & 0xff) + ";" + (color & 0xff) + "m" + str + "\x1b[" +
        close + "m"
      : str;
  } else {
    return enabled
      ? "\x1b[" + open + ";2;" + clampAndTruncate(color.r) + ";" +
        clampAndTruncate(color.g) + ";" + clampAndTruncate(color.b) + "m" +
        str + "\x1b[" + close + "m"
      : str;
  }
}

/**
 * Set text color using 24bit rgb.
 * `color` can be a number in range `0x000000` to `0xffffff` or
 * an `Rgb`.
 *
 * To produce the color magenta:
 *
 * ```ts
 *      import { rgb24 } from "enogu";
 *      rgb24("foo", 0xff00ff);
 *      rgb24("foo", {r: 255, g: 0, b: 255});
 * ```
 * @param str text color to apply 24bit rgb to
 * @param color code
 */
export function rgb24(str: string, color: number | Rgb): string {
  return init24(str, 38, 39, color);
}

/**
 * Set background color using 24bit rgb.
 * `color` can be a number in range `0x000000` to `0xffffff` or
 * an `Rgb`.
 *
 * To produce the color magenta:
 *
 * ```ts
 *      import { bgRgb24 } from "enogu";
 *      bgRgb24("foo", 0xff00ff);
 *      bgRgb24("foo", {r: 255, g: 0, b: 255});
 * ```
 * @param str text color to apply 24bit rgb to
 * @param color code
 */
export function bgRgb24(str: string, color: number | Rgb): string {
  return init24(str, 48, 49, color);
}

// https://github.com/chalk/ansi-regex/blob/02fa893d619d3da85411acc8fd4e2eea0e95a9d9/index.js
const ANSI_PATTERN = new RegExp(
  [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TXZcf-nq-uy=><~]))",
  ].join("|"),
  "g",
);

/**
 * Remove ANSI escape codes from the string.
 * @param string to remove ANSI escape codes from
 */
export function stripAnsiCode(string: string): string {
  return string.replace(ANSI_PATTERN, "");
}
