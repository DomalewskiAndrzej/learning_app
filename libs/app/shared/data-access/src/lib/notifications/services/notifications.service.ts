import { Injectable } from '@angular/core';
import { map, Observable, of, timer } from 'rxjs';
import { ItemInformation } from '@app/shared/domain';
import { Todo } from '@app/app/to-do/domain';

@Injectable()
export class NotificationsService {
  lastTodosInProgressNotificationsOffset = 0;
  todosInProgressNotifications: ItemInformation[] = JSON.parse(
    localStorage.getItem('startedTodos')
  ).map((todo: Todo) => todo.information);
  lastNotificationOffset = 0;
  notifications: ItemInformation[] = JSON.parse(
    localStorage.getItem('notifications')
  );

  loadNotificationsQuantity(): Observable<number> {
    return of(this.notifications?.length ? this.notifications?.length : 0);
  }

  loadTodosInProgressQuantity(): Observable<number> {
    return of(
      this.todosInProgressNotifications?.length
        ? this.todosInProgressNotifications?.length
        : 0
    );
  }

  loadTodosInProgressNotifications(
    offset: number
  ): Observable<ItemInformation[]> {
    return timer(1000).pipe(
      map(() => {
        const notifications = this.todosInProgressNotifications?.slice(
          this.lastTodosInProgressNotificationsOffset,
          this.lastTodosInProgressNotificationsOffset + offset
        );
        this.lastTodosInProgressNotificationsOffset += offset;
        return notifications ? notifications : [];
      })
    );
  }

  loadNotifications(offset: number): Observable<ItemInformation[]> {
    return timer(1000).pipe(
      map(() => {
        const notifications = this.notifications?.slice(
          this.lastNotificationOffset,
          this.lastNotificationOffset + offset
        );
        this.lastNotificationOffset += offset;
        return notifications ? notifications : [];
      })
    );
  }
}
