/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  
  // Optional: Customize test coverage
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  
  // Optional: Specify test match patterns
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx)',
    '**/?(*.)+(spec|test).+(ts|tsx)'
  ],
  
  // Optional: Module path aliases
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  
  // Optional: Transform settings
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};