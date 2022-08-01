/* eslint-disable */
export default {
<<<<<<<< HEAD:libs/app/shared/feature/jest.config.ts
  displayName: 'app-shared-feature',
  preset: '../../../../jest.preset.js',
========
  displayName: 'shared-domain',
  preset: '../../../jest.preset.js',
>>>>>>>> 618833c (feat(learing): todo module complete and start notifications module):libs/app/shared/domain/jest.config.ts
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
<<<<<<<< HEAD:libs/app/shared/feature/jest.config.ts
  coverageDirectory: '../../../../coverage/libs/app/shared/feature',
========
  coverageDirectory: '../../../coverage/libs/app/shared/domain',
>>>>>>>> 618833c (feat(learing): todo module complete and start notifications module):libs/app/shared/domain/jest.config.ts
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
