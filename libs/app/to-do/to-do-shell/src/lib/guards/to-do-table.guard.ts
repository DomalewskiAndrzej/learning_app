import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { TodoFacade } from '@app/app/to-do/data-access';
import { filter, Observable, of, take } from 'rxjs';
import { appConfig } from '@app/shared/resources';

@Injectable()
export class TodoTableGuard implements CanActivate {
  constructor(private todoFacade: TodoFacade) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this.todoFacade.getTodosExists$
      .pipe(
        filter((todo) => !todo),
        take(1)
      )
      .subscribe(() =>
        this.todoFacade.loadTodos({ offset: appConfig.itemsPerLoad })
      );
    return of(true);
  }
}
