import { createAction, props } from '@ngrx/store';

export const toggleSidenav = createAction('[Home] Toggle Sidenav');

export const requestInProgress = createAction(
  '[Home] Request In Progress',
  props<{ requestInProgress: boolean }>()
);

export const actionsFromHome = {
  toggleSidenav,
  requestInProgress,
};
