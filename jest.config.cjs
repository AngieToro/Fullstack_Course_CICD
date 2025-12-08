module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['e2e-tests'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
}