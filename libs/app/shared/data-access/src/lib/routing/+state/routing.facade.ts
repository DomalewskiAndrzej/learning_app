import { Store } from '@ngrx/store';
import { routingActions } from './routing.actions';
import { Injectable } from '@angular/core';
import { Link } from '@app/shared/domain';
import { RouterReducerState } from '@ngrx/router-store';
import { Observable } from 'rxjs';
import { routingQuery } from './routing.selectors';

@Injectable()
export class RoutingFacade {
  getRoutingUrl$: Observable<string> = this.store.select(
    routingQuery.getRoutingUrl
  );

  constructor(private store: Store<RouterReducerState>) {}

  navigate(link: Link): void {
    this.store.dispatch(routingActions.navigate({ link }));
  }

  goBack(): void {
    this.store.dispatch(routingActions.goBack());
  }
}
