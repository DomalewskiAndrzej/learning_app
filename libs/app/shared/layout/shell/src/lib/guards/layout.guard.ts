import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { NotificationsFacade } from '@app/shared/data-access';
import { appConfig } from '@app/shared/resources';

@Injectable()
export class LayoutGuard implements CanActivate {
  constructor(private notificationsFacade: NotificationsFacade) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this.notificationsFacade.loadNotificationsQuantity();
    this.notificationsFacade.loadTodosInProgressNotificationsQuantity();
    this.notificationsFacade.loadTodosInProgressNotifications({
      offset: appConfig.itemsPerLoad,
    });
    this.notificationsFacade.loadNotifications({
      offset: appConfig.itemsPerLoad,
    });
    return this.notificationsFacade.notificationsRequestInProgress$.pipe(
      filter((requestInProgress) => !requestInProgress),
      map(() => true)
    );
  }
}
