// Copyright 2023-2024 ryu. All rights reserved. MIT license. @license
/*
 * @deprecated Use @ryu/enogu.
 *
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

/**
 * @deprecated
 * Set text at reset
 * @param str text to reset
 */
export const reset: (str: string) => string = init(0, 0);
/**
 * @deprecated
 * Set text at bold
 * @param str text to bold
 */
export const bold: (str: string) => string = init(1, 22);
/**
 * @deprecated
 * Set text at dim
 * @param str text to dim
 */
export const dim: (str: string) => string = init(2, 22);
/**
 * @deprecated
 * Set text at italic
 * @param str text to italic
 */
export const italic: (str: string) => string = init(3, 23);
/**
 * @deprecated
 * Set text at underline
 * @param str text to underline
 */
export const underline: (str: string) => string = init(4, 24);
/**
 * @deprecated
 * Set text at inverse
 * @param str text to inverse
 */
export const inverse: (str: string) => string = init(7, 27);
/**
 * @deprecated
 * Set text at hidden
 * @param str text to hidden
 */
export const hidden: (str: string) => string = init(8, 28);
/**
 * @deprecated
 * Set text at strikethrough
 * @param str text to strikethrough
 */
export const strikethrough: (str: string) => string = init(9, 29);

/**
 * @deprecated
 * Set text at black
 * @param str text to black
 */
export const black: (str: string) => string = init(30, 39);
/**
 * @deprecated
 * Set text at red
 * @param str text to red
 */
export const red: (str: string) => string = init(31, 39);
/**
 * @deprecated
 * Set text at green
 * @param str text to green
 */
export const green: (str: string) => string = init(32, 39);
/**
 * @deprecated
 * Set text at yellow
 * @param str text to yellow
 */
export const yellow: (str: string) => string = init(33, 39);
/**
 * @deprecated
 * Set text at blue
 * @param str text to blue
 */
export const blue: (str: string) => string = init(34, 39);
/**
 * @deprecated
 * Set text at magenta
 * @param str text to magenta
 */
export const magenta: (str: string) => string = init(35, 39);
/**
 * @deprecated
 * Set text at cyan
 * @param str text to cyan
 */
export const cyan: (str: string) => string = init(36, 39);
/**
 * @deprecated
 * Set text at white
 * @param str text to white
 */
export const white: (str: string) => string = init(37, 39);
/**
 * @deprecated
 * Set text at gray
 * @param str text to gray
 */
export const gray: (str: string) => string = init(90, 39);

/**
 * @deprecated
 * Set background at black
 * @param str background to black
 */
export const bgBlack: (str: string) => string = init(40, 49);
/**
 * @deprecated
 * Set background at red
 * @param str background to red
 */
export const bgRed: (str: string) => string = init(41, 49);
/**
 * @deprecated
 * Set background at green
 * @param str background to green
 */
export const bgGreen: (str: string) => string = init(42, 49);
/**
 * @deprecated
 * Set background at yellow
 * @param str background to yellow
 */
export const bgYellow: (str: string) => string = init(43, 49);
/**
 * @deprecated
 * Set background at blue
 * @param str background to blue
 */
export const bgBlue: (str: string) => string = init(44, 49);
/**
 * @deprecated
 * Set background at magenta
 * @param str background to magenta
 */
export const bgMagenta: (str: string) => string = init(45, 49);
/**
 * @deprecated
 * Set background at cyan
 * @param str background to cyan
 */
export const bgCyan: (str: string) => string = init(46, 49);
/**
 * @deprecated
 * Set background at white
 * @param str background to white
 */
export const bgWhite: (str: string) => string = init(47, 49);
/**
 * @deprecated
 * Set background at gray
 * @param str background to gray
 */
export const bgGray: (str: string) => string = init(100, 49);
