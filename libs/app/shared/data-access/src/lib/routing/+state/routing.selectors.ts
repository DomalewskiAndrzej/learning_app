import { createSelector } from '@ngrx/store';
import { getSharedState, sharedStoreState } from '../../store/store';
import { RouterReducerState } from '@ngrx/router-store';

const getRoutingState = createSelector(
  getSharedState,
  (state: sharedStoreState) => state.routing
);

const getRoutingUrl = createSelector(
  getRoutingState,
  (state: RouterReducerState) => state.state.url
);

export const routingQuery = {
  getRoutingState,
  getRoutingUrl,
};
