# enogu

**enogu** is a library for painting your terminal with colors.\
Simple, fast, and easy to use.

## Usage

```ts
import { red } from "https://deno.land/x/enogu@0.1.1/mod.ts";

console.log(red("Hello, world!"));
```

## Modules

| name      | description                            |
| --------- | -------------------------------------- |
| mod.ts    | (Recommend) Everythings about `enogu`. |
| colors.ts | Colors and decorations.                |
| tiny.ts   | Essential colors and decorations.      |

## Benchmarks

```bash
cpu: Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz
runtime: deno 1.38.2 (x86_64-pc-windows-msvc)

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
