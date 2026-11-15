/*
 * Painting your terminal with colors.
 * @example
 * ```ts
 * import { green } from "@ryu/enogu";
 *
 * console.log(green("Hello World!"));
 * ```
 *
 * @module
 */

// deno-lint-ignore no-explicit-any
const { Deno, process } = globalThis as any;
const noColor = typeof Deno?.noColor === "boolean"
  ? Deno.noColor as boolean
  : typeof process !== "undefined"
  ? ("FORCE_COLOR" in process?.env)
    ? false
    : ("NO_COLOR" in process?.env)
    ? true
    : false
  : false;

let enabled = !noColor;

/**
 * Set coloring to enabled or disabled
 * @param value
 */
export function setColorEnabled(value: boolean) {
  if (noColor) {
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
 * @param reopen
 */
function init(open: string, close: string, reopen = open) {
  return function (str: string) {
    if (!enabled) return str;
    const index = str.length < close.length ? -1 : str.indexOf(close);
    return index === -1
      ? open + str + close
      : open + restoreStyle(str, close, reopen, index) + close;
  };
}

function restoreStyle(
  str: string,
  close: string,
  reopen: string,
  index: number,
) {
  let result = "";
  let cursor = 0;
  do {
    result += str.slice(cursor, index) + reopen;
    cursor = index + close.length;
    index = str.indexOf(close, cursor);
  } while (index !== -1);
  return result + str.slice(cursor);
}

/**
 * Set text at reset
 * @param str text to reset
 */
export const reset: (str: string) => string = init("\x1b[0m", "\x1b[0m");

/**
 * Set text at bold
 * @param str text to bold
 */
export const bold: (str: string) => string = init(
  "\x1b[1m",
  "\x1b[22m",
  "\x1b[22m\x1b[1m",
);

/**
 * Set text at dim
 * @param str text to dim
 */
export const dim: (str: string) => string = init(
  "\x1b[2m",
  "\x1b[22m",
  "\x1b[22m\x1b[2m",
);

/**
 * Set text at italic
 * @param str text to italic
 */
export const italic: (str: string) => string = init("\x1b[3m", "\x1b[23m");

/**
 * Set text at underline
 * @param str text to underline
 */
export const underline: (str: string) => string = init("\x1b[4m", "\x1b[24m");

/**
 * Set text at inverse
 * @param str text to inverse
 */
export const inverse: (str: string) => string = init("\x1b[7m", "\x1b[27m");

/**
 * Set text at hidden
 * @param str text to hidden
 */
export const hidden: (str: string) => string = init("\x1b[8m", "\x1b[28m");
/**
 * Set text at strikethrough
 * @param str text to strikethrough
 */
export const strikethrough: (str: string) => string = init(
  "\x1b[9m",
  "\x1b[29m",
);

/**
 * Set text at overline
 * @param str text to overline
 */
export const overline: (str: string) => string = init("\x1b[53m", "\x1b[55m");

/**
 * Set text at black
 * @param str text to black
 */
export const black: (str: string) => string = init("\x1b[30m", "\x1b[39m");

/**
 * Set text at red
 * @param str text to red
 */
export const red: (str: string) => string = init("\x1b[31m", "\x1b[39m");

/**
 * Set text at green
 * @param str text to green
 */
export const green: (str: string) => string = init("\x1b[32m", "\x1b[39m");

/**
 * Set text at yellow
 * @param str text to yellow
 */
export const yellow: (str: string) => string = init("\x1b[33m", "\x1b[39m");

/**
 * Set text at blue
 * @param str text to blue
 */
export const blue: (str: string) => string = init("\x1b[34m", "\x1b[39m");

/**
 * Set text at magenta
 * @param str text to magenta
 */
export const magenta: (str: string) => string = init("\x1b[35m", "\x1b[39m");

/**
 * Set text at cyan
 * @param str text to cyan
 */
export const cyan: (str: string) => string = init("\x1b[36m", "\x1b[39m");

/**
 * Set text at white
 * @param str text to white
 */
export const white: (str: string) => string = init("\x1b[37m", "\x1b[39m");

/**
 * Set text at gray
 * @param str text to gray
 */
export const gray: (str: string) => string = init("\x1b[90m", "\x1b[39m");

/**
 * Set text at bright black
 * @param str text to bright black
 */
export const brightBlack = gray;

/**
 * Set text at bright red
 * @param str text to bright red
 */
export const brightRed: (str: string) => string = init("\x1b[91m", "\x1b[39m");

/**
 * Set text at bright green
 * @param str text to bright green
 */
export const brightGreen: (str: string) => string = init(
  "\x1b[92m",
  "\x1b[39m",
);

/**
 * Set text at bright yellow
 * @param str text to bright yellow
 */
export const brightYellow: (str: string) => string = init(
  "\x1b[93m",
  "\x1b[39m",
);

/**
 * Set text at bright blue
 * @param str text to bright blue
 */
export const brightBlue: (str: string) => string = init("\x1b[94m", "\x1b[39m");

/**
 * Set text at bright magenta
 * @param str text to bright magenta
 */
export const brightMagenta: (str: string) => string = init(
  "\x1b[95m",
  "\x1b[39m",
);

/**
 * Set text at bright cyan
 * @param str text to bright cyan
 */
export const brightCyan: (str: string) => string = init("\x1b[96m", "\x1b[39m");

/**
 * Set text at bright white
 * @param str text to bright white
 */
export const brightWhite: (str: string) => string = init(
  "\x1b[97m",
  "\x1b[39m",
);

/**
 * Set background at black
 * @param str text to black
 */
export const bgBlack: (str: string) => string = init("\x1b[40m", "\x1b[49m");

/**
 * Set background at red
 * @param str background to red
 */
export const bgRed: (str: string) => string = init("\x1b[41m", "\x1b[49m");

/**
 * Set background at green
 * @param str background to green
 */
export const bgGreen: (str: string) => string = init("\x1b[42m", "\x1b[49m");

/**
 * Set background at yellow
 * @param str background to yellow
 */
export const bgYellow: (str: string) => string = init("\x1b[43m", "\x1b[49m");

/**
 * Set background at blue
 * @param str background to blue
 */
export const bgBlue: (str: string) => string = init("\x1b[44m", "\x1b[49m");

/**
 * Set background at magenta
 * @param str background to magenta
 */
export const bgMagenta: (str: string) => string = init("\x1b[45m", "\x1b[49m");

/**
 * Set background at cyan
 * @param str background to cyan
 */
export const bgCyan: (str: string) => string = init("\x1b[46m", "\x1b[49m");

/**
 * Set background at white
 * @param str background to white
 */
export const bgWhite: (str: string) => string = init("\x1b[47m", "\x1b[49m");

/**
 * Set background at gray
 * @param str background to gray
 */
export const bgGray: (str: string) => string = init("\x1b[100m", "\x1b[49m");

/**
 * Set background at bright black
 * @param str background to bright black
 */
export const bgBrightBlack = bgGray;

/**
 * Set background at bright red
 * @param str background to bright red
 */
export const bgBrightRed: (str: string) => string = init(
  "\x1b[101m",
  "\x1b[49m",
);

/**
 * Set background at bright green
 * @param str background to bright green
 */
export const bgBrightGreen: (str: string) => string = init(
  "\x1b[102m",
  "\x1b[49m",
);

/**
 * Set background at bright yellow
 * @param str background to bright yellow
 */
export const bgBrightYellow: (str: string) => string = init(
  "\x1b[103m",
  "\x1b[49m",
);

/**
 * Set background at bright blue
 * @param str background to bright blue
 */
export const bgBrightBlue: (str: string) => string = init(
  "\x1b[104m",
  "\x1b[49m",
);

/**
 * Set background at bright magenta
 * @param str background to bright magenta
 */
export const bgBrightMagenta: (str: string) => string = init(
  "\x1b[105m",
  "\x1b[49m",
);

/**
 * Set background at bright cyan
 * @param str background to bright cyan
 */
export const bgBrightCyan: (str: string) => string = init(
  "\x1b[106m",
  "\x1b[49m",
);

/**
 * Set background at bright white
 * @param str background to bright white
 */
export const bgBrightWhite: (str: string) => string = init(
  "\x1b[107m",
  "\x1b[49m",
);
