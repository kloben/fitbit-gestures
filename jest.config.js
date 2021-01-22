module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/gestures/**/*.{js,ts}'],
  testMatch: ['**/__tests__/**/*.spec.ts?(x)']
}
