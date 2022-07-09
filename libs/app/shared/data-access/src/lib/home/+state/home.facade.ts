import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HomePartialState } from './home.reducer';
import { homeQuery } from './home.selectors';
import { homeActions } from './home.actions';

@Injectable()
export class HomeFacade {
  sidenav$ = this.store.select(homeQuery.getSidenavState);

  constructor(private store: Store<HomePartialState>) {}

  toggleSidenav(): void {
    this.store.dispatch(homeActions.toggleSidenav());
  }
}
