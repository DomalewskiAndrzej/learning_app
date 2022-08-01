import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { actionsFromNotifications } from './notifications.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { NotificationsService } from '../services/notifications.service';

@Injectable()
export class NotificationsEffects {
  loadNotificationsQuantity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionsFromNotifications.loadNotificationsQuantity),
      switchMap(() =>
        this.notificationsService.loadNotificationsQuantity().pipe(
          map((quantity: number) =>
            actionsFromNotifications.loadNotificationsQuantitySuccess({
              quantity,
            })
          ),
          catchError((error) =>
            of(
              actionsFromNotifications.loadNotificationsQuantityFailure({
                error,
              })
            )
          )
        )
      )
    )
  );

  loadTodosInProgressQuantity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionsFromNotifications.loadTodosInProgressQuantity),
      switchMap(() =>
        this.notificationsService.loadTodosInProgressQuantity().pipe(
          map((quantity: number) =>
            actionsFromNotifications.loadTodosInProgressQuantitySuccess({
              quantity,
            })
          ),
          catchError((error) =>
            of(
              actionsFromNotifications.loadTodosInProgressQuantityFailure({
                error,
              })
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private notificationsService: NotificationsService
  ) {}
}
