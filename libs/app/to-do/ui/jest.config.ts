/* eslint-disable */
export default {
<<<<<<<< HEAD:libs/app/to-do/to-do-shell/jest.config.ts
  displayName: 'app-feature-to-do-table-feature-to-do-table-shell',
========
  displayName: 'app-feature-to-do-table-ui-action-buttons',
>>>>>>>> 618833c (feat(learing): todo module complete and start notifications module):libs/app/to-do/ui/jest.config.ts
  preset: '../../../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
  coverageDirectory:
<<<<<<<< HEAD:libs/app/to-do/to-do-shell/jest.config.ts
    '../../../../coverage/libs/app/feature-to-do-table/feature-to-do-table-shell',
========
    '../../../../coverage/libs/app/feature-to-do-table/ui-action-buttons',
>>>>>>>> 618833c (feat(learing): todo module complete and start notifications module):libs/app/to-do/ui/jest.config.ts
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
