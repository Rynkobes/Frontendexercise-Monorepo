module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: [
      '<rootDir>/__tests__'
    ],
    testMatch: [
      '**/*.spec.(ts|tsx)'
    ],
    moduleFileExtensions: [
      'ts',
      'tsx',
      'js',
      'jsx',
      'json',
      'node'
    ]
  };
  