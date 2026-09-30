# kuzzle-types

The TypeScript types of the [Kuzzle](https://github.com/kuzzleio/kuzzle) API contract — documents, requests, responses, notifications, mappings, security definitions — shared by the server ([`kuzzle`](https://www.npmjs.com/package/kuzzle)) and the JavaScript SDK ([`kuzzle-sdk`](https://www.npmjs.com/package/kuzzle-sdk)).

**You usually do not need to install it.** `kuzzle` and `kuzzle-sdk` depend on it and re-export every type under the same name, so keep importing from the package you already use:

```ts
import { KDocument, KDocumentContent } from "kuzzle-sdk"; // or from "kuzzle"
```

Install it directly only for code that must describe the API without depending on either — a shared model package, a front end that does not use the SDK:

```bash
npm install kuzzle-types
```

```ts
import type { KDocument, KDocumentContent } from "kuzzle-types";

interface Asset extends KDocumentContent {
  model: string;
}

function label(asset: KDocument<Asset>): string {
  return `${asset._id} (${asset._source.model})`;
}
```

## Guarantees

- **Types only.** No runtime code and no dependencies, enforced in CI (`npm run test:types-only`). Several copies of this package in one `node_modules` are harmless: its types are structural.
- **Same types as `kuzzle-sdk` 7.17.1** at the seed, asserted type by type (`tests/sdk-equivalence.ts`). `Document` (deprecated) is the one exception in form: an interface here, a class in the SDK, which keeps it.
- **Semantic versioning.** A change that can break a consumer's type check is a major.

## Contributing

```bash
npm ci
npm test   # lint + type tests + build + types-only check
```

Commits follow [Conventional Commits](https://www.conventionalcommits.org/); releases are published by semantic-release from `master` (stable) and `beta` (prerelease).

This package comes from [ADR-0002](https://github.com/kuzzleio/kuzzle/blob/2-dev/docs/adr-002/ADR-0002-own-api-contract-types.md) in the Kuzzle repository: the server owns its API contract, and the SDK builds on it.
