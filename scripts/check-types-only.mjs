// This package must never carry runtime code or dependencies: a shared package
// with runtime values breaks `instanceof` and private-member assignability as
// soon as two versions of it are installed side by side (the lesson of the
// archived kuzzle-common-objects). Types only, any number of copies is harmless.
import { createRequire } from "node:module";
import { readFileSync } from "node:fs";

const require = createRequire(import.meta.url);
const errors = [];

const pkg = JSON.parse(
  readFileSync(new URL("../package.json", import.meta.url)),
);
for (const field of [
  "dependencies",
  "peerDependencies",
  "optionalDependencies",
]) {
  if (pkg[field] && Object.keys(pkg[field]).length > 0) {
    errors.push(`package.json declares ${field}: ${Object.keys(pkg[field])}`);
  }
}

const runtimeExports = Object.keys(require("../dist/index.js")).filter(
  (name) => name !== "__esModule",
);
if (runtimeExports.length > 0) {
  errors.push(`dist/index.js exports runtime values: ${runtimeExports}`);
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log("OK: no dependency, no runtime export");
