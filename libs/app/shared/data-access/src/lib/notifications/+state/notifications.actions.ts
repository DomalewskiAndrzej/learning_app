import { createAction, props } from '@ngrx/store';

export const loadNotificationsQuantity = createAction(
  '[Notifications] Load Notifications Quantity'
);

export const loadNotificationsQuantitySuccess = createAction(
  '[Notifications] Load Notifications Quantity Success',
  props<{ quantity: number }>()
);

export const loadNotificationsQuantityFailure = createAction(
  '[Notifications] Load Notifications Quantity Failure',
  props<{ error: any }>()
);

export const loadTodosInProgressQuantity = createAction(
  '[Notifications] Load Todos In Progress Quantity'
);

export const loadTodosInProgressQuantitySuccess = createAction(
  '[Notifications] Load Todos In Progress Quantity Success',
  props<{ quantity: number }>()
);

export const loadTodosInProgressQuantityFailure = createAction(
  '[Notifications] Load Todos In Progress Quantity Failure',
  props<{ error: any }>()
);

export const actionsFromNotifications = {
  loadNotificationsQuantity,
  loadNotificationsQuantitySuccess,
  loadNotificationsQuantityFailure,
  loadTodosInProgressQuantity,
  loadTodosInProgressQuantitySuccess,
  loadTodosInProgressQuantityFailure,
};
