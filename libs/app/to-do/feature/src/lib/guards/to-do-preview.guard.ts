import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { TodoFacade } from '@app/app/to-do/data-access';
import { map, Observable } from 'rxjs';
import { SnackbarService } from '@app/shared/domain';
import { HomeFacade, RoutingFacade } from '@app/shared/data-access';

@Injectable()
export class ToDoPreviewGuard implements CanActivate {
  constructor(
    private todoFacade: TodoFacade,
    private snackbarService: SnackbarService,
    private routingFacade: RoutingFacade,
    private homeFacade: HomeFacade
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.todoFacade.getSelectedTodosUUID$.pipe(
      map((uuids) => {
        if (uuids.length > 0) {
          this.homeFacade.toggleSidenav();
          return true;
        }
        this.snackbarService.openSnackBar(
          'You dont have selected todo!',
          'Close'
        );
        this.routingFacade.goBack();
        return false;
      })
    );
  }
}
