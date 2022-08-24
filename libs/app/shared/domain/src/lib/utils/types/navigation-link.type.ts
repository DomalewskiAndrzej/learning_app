import { appConfig } from '@app/shared/resources';
import { NAVIGATION_PATHS } from '../consts/navigation-paths.const';

export type NavigationLink = {
  [Property in keyof typeof appConfig.routingTypes]?: {
    path: typeof NAVIGATION_PATHS[keyof typeof NAVIGATION_PATHS];
    name?: string;
    icon?: string;
  };
};
