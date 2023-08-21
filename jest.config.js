const { defaults: tsjPreset } = require('ts-jest/presets')

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>setupTests.ts'],
  transform: {
    ...tsjPreset.transform,
    '^.+\\.svg$': 'jest-transformer-svg',
  },
  testPathIgnorePatterns: ['.*\\.d\\.ts', '/node_modules/'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/{Transition,index}.{ts,tsx}',
    '!src/{stories,utils}/*',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
}
