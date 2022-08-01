import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { UiToDoAddEditDialogComponent } from '@app/app-to-do-ui';
import { Todo } from '@app/app/to-do/domain';

@Injectable()
export class TodoService {
  constructor(private dialog: MatDialog) {}

  openEditTodoDialog(todo: Todo): Observable<Todo> {
    return this.dialog
      .open(UiToDoAddEditDialogComponent, { data: { todo, editMode: true } })
      .afterClosed();
  }
}
