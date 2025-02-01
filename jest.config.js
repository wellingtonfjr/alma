const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/'],
  testMatch: [
    "<rootDir>/src/**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.css$': '<rootDir>/__test__/css-stub.js',
    '\\.svg$': '<rootDir>/__test__/svgTransform.js',
    '^next/navigation$': '<rootDir>/__mocks__/next/router.js',
  },
};

module.exports = createJestConfig(customJestConfig);