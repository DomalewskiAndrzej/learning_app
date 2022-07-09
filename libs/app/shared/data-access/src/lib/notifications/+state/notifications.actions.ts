import { createAction, props } from '@ngrx/store';

export const loadNotificationss = createAction(
  '[Notifications] Load Notificationss'
);

export const loadNotificationssSuccess = createAction(
  '[Notifications] Load Notificationss Success',
  props<{ data: any }>()
);

export const loadNotificationssFailure = createAction(
  '[Notifications] Load Notificationss Failure',
  props<{ error: any }>()
);
