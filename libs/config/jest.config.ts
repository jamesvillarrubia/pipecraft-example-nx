export default {
  displayName: 'config',
  preset: '../../jest.preset.cjs',
  testEnvironment: 'node',
  transform: {'^.+\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.json' }]},
  moduleFileExtensions: ['ts', 'js'],
  coverageDirectory: '../../coverage/libs/config'
};
