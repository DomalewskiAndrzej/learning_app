/* eslint-disable */
export default {
<<<<<<<< HEAD:libs/app/to-do/ui-action-buttons/jest.config.ts
  displayName: 'app-feature-to-do-table-ui-action-buttons',
  preset: '../../../../jest.preset.js',
========
  displayName: 'shared-data-access',
  preset: '../../../jest.preset.js',
>>>>>>>> 618833c (feat(learing): todo module complete and start notifications module):libs/app/shared/data-access/jest.config.ts
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
<<<<<<<< HEAD:libs/app/to-do/ui-action-buttons/jest.config.ts
  coverageDirectory:
    '../../../../coverage/libs/app/feature-to-do-table/ui-action-buttons',
========
  coverageDirectory: '../../../coverage/libs/app/shared/data-access',
>>>>>>>> 618833c (feat(learing): todo module complete and start notifications module):libs/app/shared/data-access/jest.config.ts
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
