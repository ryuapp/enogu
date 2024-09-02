# enogu

[![npm](https://img.shields.io/npm/v/enogu)](https://www.npmjs.com/package/enogu)
[![deno.land/x](https://shield.deno.dev/x/enogu)](https://deno.land/x/enogu)
[![jsr](https://jsr.io/badges/@ryu/enogu)](http://jsr.io/@ryu/enogu)

**enogu** is a library for painting your terminal with colors.\
Inspired by Deno standard library
[@std/fmt/colors](https://jsr.io/@std/fmt/doc/colors/~),
[chalk](https://github.com/chalk/chalk) and
[picocolors](https://github.com/alexeyraspopov/picocolors).

```ts
// npm
import { red } from "enogu";

console.log(red("Hello, world!"));
```

```ts
// jsr
import { red } from "@ryu/enogu";

console.log(red("Hello, world!"));
```

## Features

- No dependencies
- Faster than Deno std library
  [@std/fmt/colors](https://jsr.io/@std/fmt/doc/colors/~)
  - Compatible with [@std/fmt/colors](https://jsr.io/@std/fmt/doc/colors/~)
- Support `NO_COLOR` environment variable
- Comaptible with any JavaScript runtime, including Deno, Node.js and Bun
- Available from multiple JavaScript registries(npm, jsr and deno.land/x)
