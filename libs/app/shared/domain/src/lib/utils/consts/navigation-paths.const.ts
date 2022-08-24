import { appConfig } from '@app/shared/resources';
import { Path } from '../types/path.type';

export const NAVIGATION_PATHS: {
  [Property in keyof typeof appConfig.routingTypes]?: Path;
} = {
  todoList: `/${appConfig.routingTypes.todo}/${appConfig.routingTypes.todoList}`,
  startingPage: `/${appConfig.routingTypes.startingPage}`,
  todoPreview: `/${appConfig.routingTypes.todo}/${appConfig.routingTypes.todoPreview}`,
} as const;
