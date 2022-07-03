import { Store } from '@ngrx/store';
import { RoutingActions } from './routing.actions';
import { Injectable } from '@angular/core';
import { Link } from '@app/shared/domain';
import { RouterReducerState } from '@ngrx/router-store';

@Injectable()
export class RoutingFacade {
  constructor(private store: Store<RouterReducerState>) {}

  navigate(link: Link): void {
    this.store.dispatch(RoutingActions.Navigate({ link }));
  }
}
