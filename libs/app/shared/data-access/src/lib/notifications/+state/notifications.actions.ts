import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { LoadItems, Notification } from '@app/shared/domain';
import { Todo } from '@app/app/to-do/domain';

export const actionsFromNotifications = createActionGroup({
  source: 'Notifications',
  events: {
    'Load Todos In Progress Notifications Quantity': emptyProps(),
    'Load Todos In Progress Notifications Quantity Success': props<{
      quantity: number;
    }>(),
    'Load Todos In Progress Notifications Quantity Failure': (
      error: Error
    ) => ({ error }),
    'Load Todos In Progress Notifications': props<{ loadItems: LoadItems }>(),
    'Load Todos In Progress Notifications Success': props<{
      todosInProgressNotifications: Todo[];
    }>(),
    'Load Todos In Progress Notifications Failure': (error: Error) => ({
      error,
    }),
    'Load Notifications Quantity': emptyProps(),
    'Load Notifications Quantity Success': props<{ quantity: number }>(),
    'Load Notifications Quantity Failure': (error: Error) => ({ error }),
    'Load Notifications': props<{ loadItems: LoadItems }>(),
    'Load Notifications Success': props<{ notifications: Notification[] }>(),
    'Load Notifications Failure': (error: Error) => ({ error }),
  },
});
