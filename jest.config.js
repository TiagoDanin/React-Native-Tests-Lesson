module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './jestSetupFile.js',
  ],
  moduleNameMapper: {
    '^.+\\.svg$': '<rootDir>/src/tests/mocks/svgMock.ts',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|scheduler|react-native-vector-icons|@react-native-community|@react-navigation)',
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    'jest-styled-components',
  ],
  // eslint-disable-next-line no-dupe-keys
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './jestSetupFile.js',
  ],
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/contexts/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/screens/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/services/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/utils/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/**/*spec.tsx',
    '!<rootDir>/src/**/*yup.ts',
    '!<rootDir>/src/**/*styles.ts',
    '!<rootDir>/src/contexts/AllProviders.tsx',
    '!<rootDir>/node_modules/',
    '!<rootDir>/path/to/dir/',
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  globals: {
    RN_BASE_URL: 'https://example.com',
    RN_BASE_URL_API: 'https://example.com/api',
    RN_ENV: 'test',
  },
};
