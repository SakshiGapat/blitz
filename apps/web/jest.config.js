/**
 * Jest configuration for Blitz.js using @blitzjs/next preset.
 * More options: https://jestjs.io/docs/configuration
 */

const nextJest = require("@blitzjs/next/jest");

const createJestConfig = nextJest({
  dir: "./", // root directory of the Blitz.js app
});

// Custom Jest configuration
const customJestConfig = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Collect test coverage information
  collectCoverage: true,

  // Customize test coverage collection
  collectCoverageFrom: [
    "app/**/*.{ts,tsx,js,jsx}",
    "integrations/**/*.{ts,tsx,js,jsx}",
    "!**/node_modules/**",
    "!**/.blitz/**",
  ],

  // Configure the test environment
  testEnvironment: "jsdom", // Use 'node' if you test backend logic

  // Module name aliases for cleaner imports (match with tsconfig.json)
  moduleNameMapper: {
    "^@/app/(.*)$": "<rootDir>/app/$1",
    "^@/integrations/(.*)$": "<rootDir>/integrations/$1",
  },

  // Custom setup files (e.g., mocks, test utils)
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};

module.exports = createJestConfig(customJestConfig);
