module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: false,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/gestures/**/*.{js,ts}'],
  testMatch: ['**/__tests__/**/*.spec.ts?(x)']
}
