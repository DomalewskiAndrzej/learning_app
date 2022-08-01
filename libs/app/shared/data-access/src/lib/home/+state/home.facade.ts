import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HomePartialState } from './home.reducer';
import { homeQuery } from './home.selectors';
import { actionsFromHome } from './home.actions';

@Injectable()
export class HomeFacade {
  sidenav$ = this.store.select(homeQuery.getSidenavState);
  requestInProgress$ = this.store.select(homeQuery.getRequestInProgress);

  constructor(private store: Store<HomePartialState>) {}

  toggleSidenav(): void {
    this.store.dispatch(actionsFromHome.toggleSidenav());
  }

  requestInProgress(requestInProgress: boolean): void {
    this.store.dispatch(
      actionsFromHome.requestInProgress({ requestInProgress })
    );
  }
}
