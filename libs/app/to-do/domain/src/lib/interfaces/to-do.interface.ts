import { PRIORITIES } from '@app/app/to-do/domain';

export interface Todo {
  id: number;
  name: string;
  description: string;
  priority: PRIORITIES | string;
  timeToComplete: string;
  uuid?: string;
}
