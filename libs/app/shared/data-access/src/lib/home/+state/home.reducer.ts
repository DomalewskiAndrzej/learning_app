import { createReducer, on } from '@ngrx/store';
import { homeActions } from './home.actions';
import { TodoState } from '../../../../../../to-do/data-access/src/lib/+state/to-do.reducer';

export const homeFeatureKey = 'home';

export interface HomeState {
  sidenav: boolean;
}

export interface HomePartialState {
  readonly [homeFeatureKey]: TodoState;
}

export const HomeInitialState: HomeState = {
  sidenav: true,
};

export const homeReducer = createReducer(
  HomeInitialState,

  on(homeActions.toggleSidenav, (state) => {
    return { ...state, sidenav: !state.sidenav };
  })
);
