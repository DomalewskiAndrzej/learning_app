/* eslint-disable */
export default {
<<<<<<<< HEAD:libs/app/shared/ui-confirmation-dialog/jest.config.ts
  displayName: 'app-shared-ui-confirmation-dialog',
========
  displayName: 'app-feature-to-do-table-feature-to-do-table-shell',
>>>>>>>> 618833c (feat(learing): todo module complete and start notifications module):libs/app/to-do/to-do-shell/jest.config.ts
  preset: '../../../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
  coverageDirectory:
<<<<<<<< HEAD:libs/app/shared/ui-confirmation-dialog/jest.config.ts
    '../../../../coverage/libs/app/shared/ui-confirmation-dialog',
========
    '../../../../coverage/libs/app/feature-to-do-table/feature-to-do-table-shell',
>>>>>>>> 618833c (feat(learing): todo module complete and start notifications module):libs/app/to-do/to-do-shell/jest.config.ts
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
