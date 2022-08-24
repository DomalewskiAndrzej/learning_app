import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap, timer } from 'rxjs';
import { Notification } from '@app/shared/domain';
import { Todo } from '@app/app/to-do/domain';

@Injectable()
export class NotificationsService {
  lastTodosInProgressNotificationsOffset = 0;
  todosInProgressNotifications: string[] = JSON.parse(
    localStorage.getItem('startedTodos')
  );
  lastNotificationOffset = 0;
  notifications: Notification[] = JSON.parse(
    localStorage.getItem('notifications')
  );

  loadNotificationsQuantity(): Observable<number> {
    return timer(1000).pipe(switchMap(() => of(this.notifications?.length)));
  }

  loadTodosInProgressQuantity(): Observable<number> {
    return timer(1000).pipe(
      switchMap(() => of(this.todosInProgressNotifications?.length))
    );
  }

  loadTodosInProgressNotifications(offset: number): Observable<Todo[]> {
    const todosUuid = this.todosInProgressNotifications?.slice(
      this.lastTodosInProgressNotificationsOffset,
      this.lastTodosInProgressNotificationsOffset + offset
    );
    this.lastTodosInProgressNotificationsOffset += offset;
    const notifications: Todo[] = JSON.parse(
      localStorage.getItem('todosMemory')
    );
    return timer(1000).pipe(
      map(() => {
        return notifications
          ? notifications.filter((notification: Todo) =>
              todosUuid?.includes(notification.uuid)
            )
          : [];
      })
    );
  }

  loadNotifications(offset: number): Observable<Notification[]> {
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
