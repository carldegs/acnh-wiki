/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest');
const createJestConfig = nextJest({ dir: './src' });
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

module.exports = createJestConfig(customJestConfig);
