import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { Todo } from '@app/app/to-do/domain';
import { TodoFacade } from '@app/app/to-do/data-access';
import { UiTodoAddDialogComponent } from '@app/app/to-do/ui-todo-add-dialog';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoComponent {
  todos: Todo[] = [
    {
      id: 1,
      name: 'xd',
      description: 'as',
      priority: 'high',
      timeToComplete: '10h',
    },
    {
      id: 1,
      name: 'xd',
      description: 'as',
      priority: 'high',
      timeToComplete: '10h',
    },
  ];

  constructor(private dialog: MatDialog, private todoFacade: TodoFacade) {}

  addTodo(): void {
    this.dialog
      .open(UiTodoAddDialogComponent)
      .afterClosed()
      .pipe(filter((data: Todo) => !!data))
      .subscribe((data: Todo) => {
        this.todoFacade.addToDdo(data);
      });
  }

  openToDo([todo, editMode]: [Todo, boolean]): void {
    this.dialog;
  }
}
