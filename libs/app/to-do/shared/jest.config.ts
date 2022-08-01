/* eslint-disable */
export default {
  displayName: 'app-to-do-shared',
  preset: '../../../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
<<<<<<<< HEAD:libs/app/shared/data-access/jest.config.ts
  coverageDirectory: '../../../coverage/libs/app/shared/data-access',
========
  coverageDirectory: '../../../../coverage/libs/app/to-do/shared',
>>>>>>>> 618833c (feat(learing): todo module complete and start notifications module):libs/app/to-do/shared/jest.config.ts
  transform: {
    '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
