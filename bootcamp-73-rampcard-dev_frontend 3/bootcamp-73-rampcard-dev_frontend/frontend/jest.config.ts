/* eslint-disable import/no-anonymous-default-export */
/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
  testEnvironment: "jsdom",
  coverageDirectory: "coverage",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.stories.{ts,tsx}"],
  clearMocks: true,
  setupFilesAfterEnv: ["./src/setupTests.ts"],
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/",
    ".story.js",
    "<rootDir>/coverage",
    "<rootDir>/src/utils",
    "<rootDir>/src/mocks",
    "<rootDir>/src/theme",
    "styles.ts",
    "styles.tsx",
    "<rootDir>/src/*.d.ts",
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/coverage"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    ".+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^react($|/.+)": "<rootDir>/node_modules/react$1",
    "^src/(.*)$": "<rootDir>/src/$1",
    "^public/(.*)$": "<rootDir>/public/$1",
  },
  verbose: true,
  moduleDirectories: ["node_modules", "src"],
};
