module.exports = {
  collectCoverageFrom: ['src/**/*.js', '!src/Transition.js'],
  setupFilesAfterEnv: ['./setupTests.js'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
}
