import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { pluck, tap } from 'rxjs';
import { Router } from '@angular/router';
import { actionfFromRouting } from './routing.actions';
import { Link } from '@app/shared/domain';
import { Location } from '@angular/common';

@Injectable()
export class RoutingEffects {
  navigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionfFromRouting.navigate),
        pluck('link'),
        tap((link: Link) => {
          this.router.navigate([link.path]);
        })
      ),
    { dispatch: false }
  );

  goBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionfFromRouting.goBack),
        tap(() => {
          this.location.back();
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) {}
}
