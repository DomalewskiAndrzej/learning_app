import {
  notificationsReducer,
  NotificationsState,
} from '../notifications/+state/notifications.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { homeReducer, HomeState } from '../home/+state/home.reducer';

export const storeFeatureKey = 'shared';

export interface sharedStoreState {
  notifications: NotificationsState;
  routing: RouterReducerState;
  home: HomeState;
}

export const getSharedState =
  createFeatureSelector<sharedStoreState>(storeFeatureKey);

export const sharedStoreReducer: ActionReducerMap<sharedStoreState> = {
  notifications: notificationsReducer,
  routing: routerReducer,
  home: homeReducer,
};
