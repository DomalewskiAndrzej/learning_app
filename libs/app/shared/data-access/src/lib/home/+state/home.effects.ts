import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { actionsFromHome } from './home.actions';
import { HomePartialState } from './home.reducer';

@Injectable()
export class HomeEffects {
  constructor(
    private actions$: Actions,
    private actionSubject$: ActionsSubject,
    private store: Store<HomePartialState>
  ) {
    actionSubject$
      .pipe(filter((action) => action.type.includes('Load')))
      .subscribe((action) => {
        if (!action.type.includes('Success')) {
          this.store.dispatch(
            actionsFromHome.requestInProgress({ requestInProgress: true })
          );
        } else {
          this.store.dispatch(
            actionsFromHome.requestInProgress({ requestInProgress: false })
          );
        }
      });
  }
}
