/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  globals: {
    "ts-jest": {
      diagnostics: true,
    },
  },
  moduleDirectories: [
    "node_modules",
    "utils",
    __dirname,
  ],
  roots: ["<rootDir>/src/"],
  // setupFilesAfterEnv: ["<rootDir>/config/jest/setupJest.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mocks__/fileMock.ts',
    '\\.(css|less)$': '<rootDir>/src/__mocks__/styleMock.ts'
  },
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  verbose: true,
  transformIgnorePatterns: [
    "node_modules/(?!(@my-modules)/)",
  ],
};