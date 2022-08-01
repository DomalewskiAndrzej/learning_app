import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class NotificationsService {
  loadNotificationsQuantity(): Observable<number> {
    return of(JSON.parse(localStorage.getItem('notifications'))?.length);
  }

  loadTodosInProgressQuantity(): Observable<number> {
    return of(JSON.parse(localStorage.getItem('startedTodos'))?.length);
  }
}
