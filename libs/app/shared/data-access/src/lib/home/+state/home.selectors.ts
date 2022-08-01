import { createSelector } from '@ngrx/store';
import { getSharedState, sharedStoreState } from '../../store/store';

const getHomeState = createSelector(
  getSharedState,
  (state: sharedStoreState) => state.home
);

const getSidenavState = createSelector(getHomeState, (state) => state.sidenav);
const getRequestInProgress = createSelector(
  getHomeState,
  (state) => state.requestInProgress
);

export const homeQuery = {
  getHomeState,
  getSidenavState,
  getRequestInProgress,
};
