import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ItemInformation, LoadItems } from '@app/shared/domain';

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
      notifications: ItemInformation[];
    }>(),
    'Load Todos In Progress Notifications Failure': (error: Error) => ({
      error,
    }),
    'Load Notifications Quantity': emptyProps(),
    'Load Notifications Quantity Success': props<{ quantity: number }>(),
    'Load Notifications Quantity Failure': (error: Error) => ({ error }),
    'Load Notifications': props<{ loadItems: LoadItems }>(),
    'Load Notifications Success': props<{ notifications: ItemInformation[] }>(),
    'Load Notifications Failure': (error: Error) => ({ error }),
  },
});
