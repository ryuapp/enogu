// deno-lint-ignore no-explicit-any
const { Deno } = globalThis as any;
const noColor = typeof Deno?.noColor === "boolean"
  ? Deno.noColor as boolean
  : false;

function init(open: number, close: number) {
  return (str: string) =>
    noColor ? str : "\x1b[" + open + "m" + str + "\x1b[" + close + "m";
}

export const reset = init(0, 0);
export const bold = init(1, 22);
export const dim = init(2, 22);
export const italic = init(3, 23);
export const underline = init(4, 24);
export const inverse = init(7, 27);
export const hidden = init(8, 28);
export const strikethrough = init(9, 29);

export const black = init(30, 39);
export const red = init(31, 39);
export const green = init(32, 39);
export const yellow = init(33, 39);
export const blue = init(34, 39);
export const magenta = init(35, 39);
export const cyan = init(36, 39);
export const white = init(37, 39);
export const gray = init(90, 39);

export const bgBlack = init(40, 49);
export const bgRed = init(41, 49);
export const bgGreen = init(42, 49);
export const bgYellow = init(43, 49);
export const bgBlue = init(44, 49);
export const bgMagenta = init(45, 49);
export const bgCyan = init(46, 49);
export const bgWhite = init(47, 49);
export const bgGray = init(100, 49);
