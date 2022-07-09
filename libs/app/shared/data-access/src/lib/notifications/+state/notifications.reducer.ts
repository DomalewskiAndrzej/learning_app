import { createReducer } from '@ngrx/store';

export const notificationsFeatureKey = 'load';

export interface NotificationsState {}

export const NotificationsInitialState: NotificationsState = {};

export const notificationsReducer = createReducer(NotificationsInitialState);
