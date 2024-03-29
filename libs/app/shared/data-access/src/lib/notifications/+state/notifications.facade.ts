import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotificationsState } from './notifications.reducer';
import { actionsFromNotifications } from './notifications.actions';
import { notificationsQuery } from './notifications.selectors';

@Injectable()
export class NotificationsFacade {
  getNotificationsQuantity$ = this.store.select(
    notificationsQuery.getNotificationsQuantity
  );
  getTodosInProgressQuantity$ = this.store.select(
    notificationsQuery.getTodosInProgressQuantity
  );

  constructor(private store: Store<NotificationsState>) {}

  loadNotificationsQuantity(): void {
    this.store.dispatch(actionsFromNotifications.loadNotificationsQuantity());
  }

  loadTodosInProgressQuantity(): void {
    this.store.dispatch(actionsFromNotifications.loadTodosInProgressQuantity());
  }
}
