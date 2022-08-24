import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { TodoFacade } from '@app/app/to-do/data-access';
import { map, Observable, tap } from 'rxjs';
import { appConfig } from '@app/shared/resources';

@Injectable()
export class TodoTableGuard implements CanActivate {
  constructor(private todoFacade: TodoFacade) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.todoFacade.getTodosExists$.pipe(
      tap((exist) => {
        if (!exist) {
          this.todoFacade.loadTodos({ offset: appConfig.itemsPerLoad });
          this.todoFacade.loadTodosQuantity();
        }
      }),
      map(() => true)
    );
  }
}
