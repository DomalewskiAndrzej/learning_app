import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { Todo } from '@app/app/to-do/domain';
import { TodoFacade } from '@app/app/to-do/data-access';
import { HomeFacade, RoutingFacade } from '@app/shared/data-access';
import { TodoDialogService } from '@app/app/to-do/shared/services';
import { LoadItems } from '@app/shared/domain';

@Component({
  selector: 'app-feature-feature-to-do-table-table',
  templateUrl: './feature-to-do-table.component.html',
  styleUrls: ['./feature-to-do-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureToDoTableComponent {
  todos$ = this.todoFacade.getTodos$;
  lastOpenedTodosUUID$ = this.todoFacade.getSelectedTodosUUID$;
  requestInProgress$ = this.todoFacade.requestInProgress$;
  canLoadMoreItems$ = this.todoFacade.canLoadMoreItems$;

  constructor(
    private dialog: MatDialog,
    private todoFacade: TodoFacade,
    private homeFacade: HomeFacade,
    private routingFacade: RoutingFacade,
    private todoDialogService: TodoDialogService
  ) {}

  loadTodos(LoadItems: LoadItems): void {
    this.todoFacade.loadTodos(LoadItems);
  }

  addTodo(): void {
    this.todoDialogService.addTodo();
  }

  openTodos(todos: Todo[]): void {
    this.todoFacade.selectTodos(todos);
    this.routingFacade.navigate({ path: 'to-do/preview' });
  }

  editTodo(todo: Todo): void {
    this.todoDialogService.editTodo(todo);
  }

  deleteTodo(id: string): void {
    this.todoDialogService
      .openConditionalDialog()
      .pipe(filter((response: boolean) => response))
      .subscribe(() => {
        this.todoFacade.deleteTodo(id);
      });
  }

  deleteTodos(ids: string[]): void {
    this.todoDialogService
      .openConditionalDialog()
      .pipe(filter((response: boolean) => response))
      .subscribe(() => {
        this.todoFacade.deleteTodos(ids);
      });
  }
}
