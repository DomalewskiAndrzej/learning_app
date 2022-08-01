import { Injectable } from '@angular/core';
import { Todo } from '@app/app/to-do/domain';
import { UiToDoAddEditDialogComponent } from '@app/app/to-do/ui-to-do-add-dialog';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class TodoService {
  constructor(private dialog: MatDialog) {}

  openEditTodoDialog(todo: Todo): Observable<Todo> {
    return this.dialog
      .open(UiToDoAddEditDialogComponent, { data: { todo, editMode: true } })
      .afterClosed();
  }
}
