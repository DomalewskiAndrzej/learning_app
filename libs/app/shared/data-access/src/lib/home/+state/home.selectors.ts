import { createSelector } from '@ngrx/store';
import { getSharedState, sharedStoreState } from '../../store/store';

const getHomeState = createSelector(
  getSharedState,
  (state: sharedStoreState) => state.home
);

const getSidenavState = createSelector(getHomeState, (state) => state.sidenav);

export const homeQuery = {
  getHomeState,
  getSidenavState,
};
