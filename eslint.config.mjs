import kuzzle from "eslint-plugin-kuzzle";

export default [
  { ignores: ["dist/**", "**/*.d.ts"] },

  ...kuzzle.configs.default,
  ...kuzzle.configs.node,
  ...kuzzle.configs.typescript.map((config) => ({
    ...config,
    files: ["**/*.ts"],
  })),

  {
    files: ["**/*.ts"],
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { disallowTypeAnnotations: false },
      ],
      // The contract is the SDK's as is: its `any`s are part of it.
      "@typescript-eslint/no-explicit-any": "off",
    },
  },

  {
    files: ["scripts/**"],
    rules: { "no-console": "off" },
  },
];
