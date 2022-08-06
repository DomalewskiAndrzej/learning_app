import { createReducer, on } from '@ngrx/store';
import { actionsFromNotifications } from './notifications.actions';
import { ItemInformation } from '@app/shared/domain';

export const notificationsFeatureKey = 'load';

export interface NotificationsState {
  todosInProgressNotificationsQuantity: number;
  todosInProgressNotifications: ItemInformation[];
  notificationsQuantity: number;
  notifications: ItemInformation[];
  notificationsRequestInProgress: boolean;
}

export const NotificationsInitialState: NotificationsState = {
  notificationsQuantity: 0,
  todosInProgressNotificationsQuantity: 0,
  notifications: [],
  todosInProgressNotifications: [],
  notificationsRequestInProgress: false,
};

export const notificationsReducer = createReducer(
  NotificationsInitialState,
  on(
    actionsFromNotifications.loadNotifications,
    actionsFromNotifications.loadTodosInProgressNotifications,
    (state) => {
      return { ...state, notificationsRequestInProgress: true };
    }
  ),

  on(
    actionsFromNotifications.loadTodosInProgressNotificationsQuantitySuccess,
    (state, action) => {
      return {
        ...state,
        todosInProgressNotificationsQuantity: action.quantity,
      };
    }
  ),

  on(
    actionsFromNotifications.loadTodosInProgressNotificationsSuccess,
    (state, action) => {
      return {
        ...state,
        todosInProgressNotifications: action.notifications,
        notificationsRequestInProgress: false,
      };
    }
  ),

  on(
    actionsFromNotifications.loadNotificationsQuantitySuccess,
    (state, action) => {
      return { ...state, notificationsQuantity: action.quantity };
    }
  ),

  on(actionsFromNotifications.loadNotificationsSuccess, (state, action) => {
    return {
      ...state,
      notifications: action.notifications,
      notificationsRequestInProgress: false,
    };
  })
);
