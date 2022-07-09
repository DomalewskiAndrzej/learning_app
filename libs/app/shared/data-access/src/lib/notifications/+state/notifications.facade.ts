import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotificationsState } from './notifications.reducer';

@Injectable()
export class NotificationsFacade {
  constructor(store: Store<NotificationsState>) {}
}
