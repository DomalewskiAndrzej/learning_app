import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotificationsState } from './notifications.reducer';
import { actionsFromNotifications } from './notifications.actions';
import { notificationsQuery } from './notifications.selectors';
import { LoadItems } from '@app/shared/domain';

@Injectable()
export class NotificationsFacade {
  getTodosInProgressQuantity$ = this.store.select(
    notificationsQuery.getTodosInProgressNotificationsQuantity
  );
  getTodosInProgress$ = this.store.select(
    notificationsQuery.getTodosInProgressNotifications
  );
  getNotificationsQuantity$ = this.store.select(
    notificationsQuery.getNotificationsQuantity
  );
  getNotifications$ = this.store.select(notificationsQuery.getNotifications);
  notificationsRequestInProgress$ = this.store.select(
    notificationsQuery.notificationsRequestInProgress
  );

  constructor(private store: Store<NotificationsState>) {}

  loadTodosInProgressNotificationsQuantity(): void {
    this.store.dispatch(
      actionsFromNotifications.loadTodosInProgressNotificationsQuantity()
    );
  }

  loadTodosInProgressNotifications(loadItems: LoadItems): void {
    this.store.dispatch(
      actionsFromNotifications.loadTodosInProgressNotifications({ loadItems })
    );
  }

  loadNotificationsQuantity(): void {
    this.store.dispatch(actionsFromNotifications.loadNotificationsQuantity());
  }

  loadNotifications(loadItems: LoadItems): void {
    this.store.dispatch(
      actionsFromNotifications.loadNotifications({ loadItems })
    );
  }
}
