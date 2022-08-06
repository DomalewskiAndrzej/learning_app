import { createSelector } from '@ngrx/store';
import { getSharedState, sharedStoreState } from '../../store/store';

const getNotificationsState = createSelector(
  getSharedState,
  (state: sharedStoreState) => state.notifications
);

const getTodosInProgressNotificationsQuantity = createSelector(
  getNotificationsState,
  (state) => state.todosInProgressNotificationsQuantity
);

const getTodosInProgressNotifications = createSelector(
  getNotificationsState,
  (state) => state.todosInProgressNotifications
);

const getNotificationsQuantity = createSelector(
  getNotificationsState,
  (state) => state.notificationsQuantity
);

const getNotifications = createSelector(
  getNotificationsState,
  (state) => state.notifications
);

const notificationsRequestInProgress = createSelector(
  getNotificationsState,
  (state) => state.notificationsRequestInProgress
);

export const notificationsQuery = {
  getNotificationsQuantity,
  getTodosInProgressNotificationsQuantity,
  getNotifications,
  getTodosInProgressNotifications,
  notificationsRequestInProgress,
};
