import { createReducer, on } from '@ngrx/store';
import { actionsFromHome } from './home.actions';

export const homeFeatureKey = 'home';

export interface HomeState {
  sidenav: boolean;
  requestInProgress: boolean;
}

export interface HomePartialState {
  readonly [homeFeatureKey]: HomeState;
}

export const HomeInitialState: HomeState = {
  sidenav: true,
  requestInProgress: false,
};

export const homeReducer = createReducer(
  HomeInitialState,

  on(actionsFromHome.toggleSidenav, (state) => {
    return { ...state, sidenav: !state.sidenav };
  }),

  on(actionsFromHome.requestInProgress, (state, action) => {
    return { ...state, requestInProgress: action.requestInProgress };
  })
);
