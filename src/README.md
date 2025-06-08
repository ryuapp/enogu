# enogu

[![npm](https://img.shields.io/npm/v/enogu?labelColor=171717&color=39b54a)](https://www.npmjs.com/package/enogu)
[![jsr](https://jsr.io/badges/@ryu/enogu?color=39b54a)](http://jsr.io/@ryu/enogu)

**enogu** is a library for painting your terminal with colors.\
Inspired by Deno standard library
[@std/fmt/colors](https://jsr.io/@std/fmt/doc/colors/~),
[chalk](https://github.com/chalk/chalk) and
[picocolors](https://github.com/alexeyraspopov/picocolors).

## Features

⚡️ Zero dependencies - The minimum bundle size.

🦕 Deno Friendly - No permission flags are required to use Deno.

✨ Support `NO_COLOR` environment variable - Unofficial standard color disable option.

🌍 Multi-Runtime - Compatible with any JavaScript runtime, including Deno, Node.js and Bun.

## Usage

```ts | ignore
// npm
import { green } from "enogu";

console.log(green("Hello world!"));
```

```ts
// jsr
import { green } from "@ryu/enogu";

console.log(green("Hello world!"));
```

## LICENSE

MIT
