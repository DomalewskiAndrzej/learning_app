import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { Todo, TodoLoad, TodoService } from '@app/app/to-do/domain';
import { TodoFacade } from '@app/app/to-do/data-access';
import { UiToDoAddEditDialogComponent } from '@app/app/to-do/ui-to-do-add-dialog';
import { appConfig } from '@app/shared/resources';
import { RoutingFacade } from '@app/shared/data-access';
import { UiConfirmationDialogComponent } from '@app/app/shared/ui-confirmation-dialog';

@Component({
  selector: 'app-feature-feature-to-do-table-table',
  templateUrl: './feature-to-do-table.component.html',
  styleUrls: ['./feature-to-do-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TodoService],
})
export class FeatureToDoTableComponent implements OnInit {
  todos: Todo[] = [
    {
      id: 1,
      name: 'xd1',
      description: 'as',
      priority: 'high',
      timeToComplete: '10:00',
      uuid: '123',
    },
    {
      id: 3,
      name: 'xd2',
      description: 'as',
      priority: 'high',
      timeToComplete: '10:00',
      uuid: '321',
    },
  ];
  lastOpenedTodosUUID$ = this.todoFacade.getSelectedTodosUUID$;

  firstTodoLoad: TodoLoad = { offset: appConfig.firstItemLoad };

  constructor(
    private dialog: MatDialog,
    private todoFacade: TodoFacade,
    private routingFacade: RoutingFacade,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.todoFacade.loadTodos(this.firstTodoLoad);
  }

  loadTodos(todoLoad: TodoLoad): void {
    this.todoFacade.loadTodos(todoLoad);
  }

  addTodo(): void {
    this.dialog
      .open(UiToDoAddEditDialogComponent)
      .afterClosed()
      .pipe(filter((data: Todo) => !!data))
      .subscribe((data: Todo) => {
        this.todoFacade.addTodo(data);
      });
  }

  openTodos(todos: Todo[]): void {
    this.todoFacade.selectTodos(todos);
    this.routingFacade.navigate({ path: 'to-do/preview' });
  }

  editTodo(todo: Todo): void {
    this.todoService
      .openEditTodoDialog(todo)
      .pipe(filter((todo: Todo) => !!todo))
      .subscribe((todo: Todo) => this.todoFacade.editTodo(todo));
  }

  deleteTodo(id: string): void {
    this.dialog
      .open(UiConfirmationDialogComponent, {
        panelClass: 'confirmation-dialog',
      })
      .afterClosed()
      .pipe(filter((response: boolean) => response))
      .subscribe(() => {
        this.todoFacade.deleteTodo(id);
      });
  }

  deleteTodos(ids: string[]): void {
    this.dialog
      .open(UiConfirmationDialogComponent, {
        panelClass: 'confirmation-dialog',
      })
      .afterClosed()
      .pipe(filter((response: boolean) => response))
      .subscribe(() => {
        this.todoFacade.deleteTodos(ids);
      });
  }
}
