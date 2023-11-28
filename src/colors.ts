// deno-lint-ignore no-explicit-any
const { Deno } = globalThis as any;
const noColor = typeof Deno?.noColor === "boolean"
  ? Deno.noColor as boolean
  : false;

/**
 * Initialization of color function
 * @param open
 * @param close
 */
function init(open: number, close: number) {
  return function (str: string) {
    return noColor ? str : "\x1b[" + open + "m" + str + "\x1b[" + close + "m";
  };
}

/**
 * Set text at reset
 * @param str text to reset
 */
export const reset = init(0, 0);

/**
 * Set text at bold
 * @param str text to bold
 */
export const bold = init(1, 22);

/**
 * Set text at dim
 * @param str text to dim
 */
export const dim = init(2, 22);

/**
 * Set text at italic
 * @param str text to italic
 */
export const italic = init(3, 23);

/**
 * Set text at underline
 * @param str text to underline
 */
export const underline = init(4, 24);

/**
 * Set text at inverse
 * @param str text to inverse
 */
export const inverse = init(7, 27);

/**
 * Set text at hidden
 * @param str text to hidden
 */
export const hidden = init(8, 28);
/**
 * Set text at strikethrough
 * @param str text to strikethrough
 */
export const strikethrough = init(9, 29);

/**
 * Set text at overline
 * @param str text to overline
 */
export const overline = init(53, 55);

/**
 * Set text at black
 * @param str text to black
 */
export const black = init(30, 39);

/**
 * Set text at red
 * @param str text to red
 */
export const red = init(31, 39);

/**
 * Set text at green
 * @param str text to green
 */
export const green = init(32, 39);

/**
 * Set text at yellow
 * @param str text to yellow
 */
export const yellow = init(33, 39);

/**
 * Set text at blue
 * @param str text to blue
 */
export const blue = init(34, 39);

/**
 * Set text at magenta
 * @param str text to magenta
 */
export const magenta = init(35, 39);

/**
 * Set text at cyan
 * @param str text to cyan
 */
export const cyan = init(36, 39);

/**
 * Set text at white
 * @param str text to white
 */
export const white = init(37, 39);

/**
 * Set text at gray
 * @param str text to gray
 */
export const gray = init(90, 39);

/**
 * Set text at bright black
 * @param str text to bright black
 */
export const brightBlack = gray;

/**
 * Set text at bright red
 * @param str text to bright red
 */
export const brightRed = init(91, 39);

/**
 * Set text at bright green
 * @param str text to bright green
 */
export const brightGreen = init(92, 39);

/**
 * Set text at bright yellow
 * @param str text to bright yellow
 */
export const brightYellow = init(93, 39);

/**
 * Set text at bright blue
 * @param str text to bright blue
 */
export const brightBlue = init(94, 39);

/**
 * Set text at bright magenta
 * @param str text to bright magenta
 */
export const brightMagenta = init(95, 39);

/**
 * Set text at bright cyan
 * @param str text to bright cyan
 */
export const brightCyan = init(96, 39);

/**
 * Set text at bright white
 * @param str text to bright white
 */
export const brightWhite = init(97, 39);

/**
 * Set background at black
 * @param str text to black
 */
export const bgBlack = init(40, 49);

/**
 * Set background at red
 * @param str background to red
 */
export const bgRed = init(41, 49);

/**
 * Set background at green
 * @param str background to green
 */
export const bgGreen = init(42, 49);

/**
 * Set background at yellow
 * @param str background to yellow
 */
export const bgYellow = init(43, 49);

/**
 * Set background at blue
 * @param str background to blue
 */
export const bgBlue = init(44, 49);

/**
 * Set background at magenta
 * @param str background to magenta
 */
export const bgMagenta = init(45, 49);

/**
 * Set background at cyan
 * @param str background to cyan
 */
export const bgCyan = init(46, 49);

/**
 * Set background at white
 * @param str background to white
 */
export const bgWhite = init(47, 49);

/**
 * Set background at gray
 * @param str background to gray
 */
export const bgGray = init(100, 49);

/**
 * Set background at bright black
 * @param str background to bright black
 */
export const bgBrightBlack = bgGray;

/**
 * Set background at bright red
 * @param str background to bright red
 */
export const bgBrightRed = init(101, 49);

/**
 * Set background at bright green
 * @param str background to bright green
 */
export const bgBrightGreen = init(102, 49);

/**
 * Set background at bright yellow
 * @param str background to bright yellow
 */
export const bgBrightYellow = init(103, 49);

/**
 * Set background at bright blue
 * @param str background to bright blue
 */
export const bgBrightBlue = init(104, 49);

/**
 * Set background at bright magenta
 * @param str background to bright magenta
 */
export const bgBrightMagenta = init(105, 49);

/**
 * Set background at bright cyan
 * @param str background to bright cyan
 */
export const bgBrightCyan = init(106, 49);

/**
 * Set background at bright white
 * @param str background to bright white
 */
export const bgBrightWhite = init(107, 49);
