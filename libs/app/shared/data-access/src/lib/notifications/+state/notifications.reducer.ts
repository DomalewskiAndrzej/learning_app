import { createReducer, on } from '@ngrx/store';
import { actionsFromNotifications } from './notifications.actions';

export const notificationsFeatureKey = 'load';

export interface NotificationsState {
  notificationsQuantity: number;
  todosInProgressQuantity: number;
}

export const NotificationsInitialState: NotificationsState = {
  notificationsQuantity: 0,
  todosInProgressQuantity: 0,
};

export const notificationsReducer = createReducer(
  NotificationsInitialState,
  on(
    actionsFromNotifications.loadNotificationsQuantitySuccess,
    (state, action) => {
      return { ...state, notificationsQuantity: action.quantity };
    }
  ),

  on(
    actionsFromNotifications.loadTodosInProgressQuantitySuccess,
    (state, action) => {
      return { ...state, todosInProgressQuantity: action.quantity };
    }
  )
);
