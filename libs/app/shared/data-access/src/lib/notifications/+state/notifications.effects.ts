import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { actionsFromNotifications } from './notifications.actions';
import { catchError, map, of, pluck, switchMap } from 'rxjs';
import { NotificationsService } from '../services/notifications.service';
import { ItemInformation } from '@app/shared/domain';

@Injectable()
export class NotificationsEffects {
  loadTodosInProgressQuantity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionsFromNotifications.loadTodosInProgressNotificationsQuantity),
      switchMap(() =>
        this.notificationsService.loadTodosInProgressQuantity().pipe(
          map((quantity: number) =>
            actionsFromNotifications.loadTodosInProgressNotificationsQuantitySuccess(
              {
                quantity,
              }
            )
          ),
          catchError((error: Error) =>
            of(
              actionsFromNotifications.loadTodosInProgressNotificationsQuantityFailure(
                error
              )
            )
          )
        )
      )
    )
  );

  loadTodosInProgress$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionsFromNotifications.loadTodosInProgressNotifications),
      pluck('loadItems'),
      switchMap((loadItems) =>
        this.notificationsService
          .loadTodosInProgressNotifications(loadItems.offset)
          .pipe(
            map((notifications: ItemInformation[]) =>
              actionsFromNotifications.loadTodosInProgressNotificationsSuccess({
                notifications,
              })
            ),
            catchError((error: Error) =>
              of(
                actionsFromNotifications.loadTodosInProgressNotificationsFailure(
                  error
                )
              )
            )
          )
      )
    )
  );

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
            of(actionsFromNotifications.loadNotificationsQuantityFailure(error))
          )
        )
      )
    )
  );

  loadNotifications$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionsFromNotifications.loadNotifications),
      pluck('loadItems'),
      switchMap((loadItems) =>
        this.notificationsService.loadNotifications(loadItems.offset).pipe(
          map((notifications: ItemInformation[]) =>
            actionsFromNotifications.loadNotificationsSuccess({
              notifications,
            })
          ),
          catchError((error: Error) =>
            of(actionsFromNotifications.loadNotificationsFailure(error))
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
