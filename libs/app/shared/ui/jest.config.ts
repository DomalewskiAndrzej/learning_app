/* eslint-disable */
export default {
  displayName: 'app-shared-ui',
  preset: '../../../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
<<<<<<<< HEAD:libs/app/shared/domain/jest.config.ts
  coverageDirectory: '../../../coverage/libs/app/shared/domain',
========
  coverageDirectory: '../../../../coverage/libs/app/shared/ui',
>>>>>>>> 618833c (feat(learing): todo module complete and start notifications module):libs/app/shared/ui/jest.config.ts
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
