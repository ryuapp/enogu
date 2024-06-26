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

## Benchmarks

**enogu** is faster than other similar libraries.

```bash
/bench/complex_bench.ts
benchmark       time (avg)        iter/s             (min … max)       p75       p99      p995
---------------------------------------------------------------- -----------------------------
deno/std         1.59 µs/iter     628,433.8     (1.56 µs … 1.65 µs)    1.6 µs   1.65 µs   1.65 µs
chalk           280.4 ns/iter   3,566,397.1 (269.48 ns … 357.42 ns)  282.9 ns 340.04 ns 357.42 ns
picocolors       65.8 ns/iter  15,197,757.4  (61.56 ns … 141.08 ns)   63.8 ns 117.19 ns  119.7 ns
enogu           50.87 ns/iter  19,657,336.8  (40.48 ns … 165.85 ns)  50.13 ns 133.06 ns 137.79 ns

/bench/simple_bench.ts
benchmark       time (avg)        iter/s             (min … max)       p75       p99      p995
---------------------------------------------------------------- -----------------------------
deno/std       342.76 ns/iter   2,917,524.4 (312.85 ns … 498.98 ns) 358.01 ns 450.82 ns 498.98 ns
chalk           54.04 ns/iter  18,503,399.2   (49.87 ns … 97.89 ns)  57.02 ns  71.23 ns  85.35 ns
picocolors      27.69 ns/iter  36,119,744.9  (25.89 ns … 144.71 ns)  27.07 ns  56.17 ns   63.5 ns
enogu               5 ns/iter 200,175,100.8     (4.69 ns … 9.01 ns)   5.01 ns   6.22 ns   7.37 ns
```
