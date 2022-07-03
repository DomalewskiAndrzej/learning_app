import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { pluck, tap } from 'rxjs';
import { Router } from '@angular/router';
import { RoutingActions } from './routing.actions';
import { Link } from '@app/shared/domain';

@Injectable()
export class RoutingEffects {
  navigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RoutingActions.Navigate),
        pluck('link'),
        tap((link: Link) => {
          this.router.navigate([link.path]);
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router) {}
}
