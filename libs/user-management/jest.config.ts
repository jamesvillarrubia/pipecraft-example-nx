export default {
  displayName: 'user-management',
  preset: '../../jest.preset.cjs',
  testEnvironment: 'node',
  transform: {'^.+\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.json' }]},
  moduleFileExtensions: ['ts', 'js'],
  coverageDirectory: '../../coverage/libs/user-management'
};
