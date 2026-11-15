import type * as colors from "@ryu/enogu";

let moduleId = 0;

export async function loadNodeColors(
  env: Record<string, string>,
): Promise<typeof colors> {
  const denoDescriptor = Object.getOwnPropertyDescriptor(globalThis, "Deno")!;
  const processDescriptor = Object.getOwnPropertyDescriptor(
    globalThis,
    "process",
  );

  try {
    // Exercise Node's environment detection without Deno or env permissions.
    Object.defineProperty(globalThis, "Deno", {
      ...denoDescriptor,
      value: undefined,
    });
    Object.defineProperty(globalThis, "process", {
      configurable: true,
      value: { env },
    });
    return await import(`../src/mod.ts?node-test=${moduleId++}`);
  } finally {
    Object.defineProperty(globalThis, "Deno", denoDescriptor);
    if (processDescriptor) {
      Object.defineProperty(globalThis, "process", processDescriptor);
    } else {
      Reflect.deleteProperty(globalThis, "process");
    }
  }
}
