import { appConfig } from '@app/shared/resources';

export interface Todo {
  id: number;
  name: string;
  description: string;
  priority: keyof typeof appConfig.priorities;
  timeToComplete: string;
  uuid?: string;
}
