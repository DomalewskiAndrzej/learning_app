import { Injectable } from '@angular/core';
import { NotificationsFacade } from '../+state/notifications.facade';
import { ActionsSubject } from '@ngrx/store';

@Injectable()
export class NotificationRequestInProgressService {
  constructor(
    private notificationFacade: NotificationsFacade,
    private action$: ActionsSubject
  ) {
    // Object.entries(actionsFromNotifications).forEach((action$) =>
    //   console.log(action$)
    // );
    this.action$.pipe().subscribe((action) => {
      // if (action.type === typeof actionsFromNotifications) {
      // }
    });
  }
}
