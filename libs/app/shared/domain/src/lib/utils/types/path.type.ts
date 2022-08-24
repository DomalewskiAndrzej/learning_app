import { appConfig } from '@app/shared/resources';

export type Path =
  | `/${pathFragment}`
  | `/${pathFragment}/${pathFragment}`
  | `/${pathFragment}/${pathFragment}/${pathFragment}`;

type pathFragment =
  typeof appConfig.routingTypes[keyof typeof appConfig.routingTypes];
