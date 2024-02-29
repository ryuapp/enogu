/*
 * Painting your terminal with colors.
 * This module is the tiny version with only limited colors implemented.
 *
 * @module
 */

// dnt-shim-ignore
// deno-lint-ignore no-explicit-any
const { Deno, process } = globalThis as any;
const noColor = typeof Deno?.noColor === "boolean"
  ? Deno.noColor as boolean
  : typeof process !== "undefined"
  ? process.env.NO_COLOR === "true"
  : false;

function init(open: number, close: number) {
  return function (str: string) {
    return noColor ? str : "\x1b[" + open + "m" + str + "\x1b[" + close + "m";
  };
}

export const reset: (str: string) => string = init(0, 0);
export const bold: (str: string) => string = init(1, 22);
export const dim: (str: string) => string = init(2, 22);
export const italic: (str: string) => string = init(3, 23);
export const underline: (str: string) => string = init(4, 24);
export const inverse: (str: string) => string = init(7, 27);
export const hidden: (str: string) => string = init(8, 28);
export const strikethrough: (str: string) => string = init(9, 29);

export const black: (str: string) => string = init(30, 39);
export const red: (str: string) => string = init(31, 39);
export const green: (str: string) => string = init(32, 39);
export const yellow: (str: string) => string = init(33, 39);
export const blue: (str: string) => string = init(34, 39);
export const magenta: (str: string) => string = init(35, 39);
export const cyan: (str: string) => string = init(36, 39);
export const white: (str: string) => string = init(37, 39);
export const gray: (str: string) => string = init(90, 39);

export const bgBlack: (str: string) => string = init(40, 49);
export const bgRed: (str: string) => string = init(41, 49);
export const bgGreen: (str: string) => string = init(42, 49);
export const bgYellow: (str: string) => string = init(43, 49);
export const bgBlue: (str: string) => string = init(44, 49);
export const bgMagenta: (str: string) => string = init(45, 49);
export const bgCyan: (str: string) => string = init(46, 49);
export const bgWhite: (str: string) => string = init(47, 49);
export const bgGray: (str: string) => string = init(100, 49);
