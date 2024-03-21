const path = require("path");

module.exports = {
  transform: {
    "\\.[jt]s?$": [
      "babel-jest",
      { configFile: path.resolve(__dirname, "./babel.config.json") },
    ],
  },
  verbose: true,
  // testMatch: ['**/tests/**/*.test.ts', '**/tests/**/*.test.js'],
  collectCoverageFrom: [
    "**/*.{ts}",
    "**/*.{js}",
    "!**/vendor/**",
    "!**/__tests__/**",
  ],
  testEnvironment: "node",
  moduleDirectories: ["node_modules"],
  modulePathIgnorePatterns: [
    "/node_modules/",
    "/.aws-sam/",
    "/build/",
    "/dist/",
  ],
  coveragePathIgnorePatterns: [],
  rootDir: "../../../",
  roots: ["app", "module", "lib"],
  testTimeout: 60 * 1000,
};
