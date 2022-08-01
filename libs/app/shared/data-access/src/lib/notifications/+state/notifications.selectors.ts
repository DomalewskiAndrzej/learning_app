import { createSelector } from '@ngrx/store';
import { getSharedState, sharedStoreState } from '../../store/store';

const getNotificationsState = createSelector(
  getSharedState,
  (state: sharedStoreState) => state.notifications
);

const getNotificationsQuantity = createSelector(
  getNotificationsState,
  (state) => state.notificationsQuantity
);
const getTodosInProgressQuantity = createSelector(
  getNotificationsState,
  (state) => state.todosInProgressQuantity
);

export const notificationsQuery = {
  getNotificationsQuantity,
  getTodosInProgressQuantity,
};
