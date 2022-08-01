import { Injectable } from '@angular/core';
import { Todo } from '@app/app/to-do/domain';
import { filter, Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TodoFacade } from '@app/app/to-do/data-access';
import { UiToDoAddEditDialogComponent } from '@app/app-to-do-ui';
import { UiConfirmationDialogComponent } from '@app/app-shared-ui';

@Injectable()
export class TodoDialogService {
  constructor(private dialog: MatDialog, private todoFacade: TodoFacade) {}

  addTodo(): void {
    this.dialog
      .open(UiToDoAddEditDialogComponent)
      .afterClosed()
      .pipe(filter((data: Todo) => !!data))
      .subscribe((data: Todo) => {
        this.todoFacade.addTodo(data);
      });
  }

  editTodo(todo: Todo): void {
    this.dialog
      .open(UiToDoAddEditDialogComponent, { data: { todo, editMode: true } })
      .afterClosed()
      .pipe(
        filter((changedTodo: Todo) => !!changedTodo && todo !== changedTodo)
      )
      .subscribe((changes: Todo) =>
        this.todoFacade.editTodo({ ...todo, ...changes })
      );
  }

  openConditionalDialog(): Observable<boolean> {
    return this.dialog
      .open(UiConfirmationDialogComponent, {
        panelClass: 'confirmation-dialog',
      })
      .afterClosed();
  }
}
