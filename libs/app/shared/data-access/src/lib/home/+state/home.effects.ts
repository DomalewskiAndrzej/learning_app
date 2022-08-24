import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { HomePartialState } from './home.reducer';
import { actionsFromHome } from './home.actions';
import { filter } from 'rxjs';

@Injectable()
export class HomeEffects {
  constructor(
    private actions$: Actions,
    private actionSubject$: ActionsSubject,
    private store: Store<HomePartialState>
  ) {
    let request = 0;
    actionSubject$
      .pipe(
        filter(
          (action) =>
            action.type !== actionsFromHome.requestInProgress.type &&
            !action.type.includes('@ngrx/router-store') &&
            !action.type.includes('[Home]') &&
            !action.type.includes('[Routing]') &&
            !action.type.includes('Select')
        )
      )
      .subscribe((action) => {
        if (!action.type.includes('Success')) {
          request++;
          if (request === 1) {
            this.store.dispatch(
              actionsFromHome.requestInProgress({ requestInProgress: true })
            );
          }
        } else {
          request--;
          if (request === 0) {
            this.store.dispatch(
              actionsFromHome.requestInProgress({ requestInProgress: false })
            );
          }
        }
      });
  }
}
