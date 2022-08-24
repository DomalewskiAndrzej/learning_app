import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Todo } from '@app/app/to-do/domain';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { appConfig } from '@app/shared/resources';
import { LoadItems } from '@app/shared/domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-to-do-table',
  templateUrl: './to-do-table.component.html',
  styleUrls: ['./to-do-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Output() loadTodos = new EventEmitter<LoadItems>();
  @Output() openTodos = new EventEmitter<Todo[]>();
  @Output() deleteTodos = new EventEmitter<string[]>();
  @Output() deleteTodo = new EventEmitter<string>();
  @Output() editTodo = new EventEmitter<Todo>();
  @Input() lastOpenedTodosUUID: string[];
  @Input() requestInProgress$: Observable<boolean>;
  @Input() canLoadMoreItems: boolean;
  displayedColumns = appConfig.todoTableDisplayedColums;
  todosSelection = new SelectionModel<Todo>(true, []);
  dataSource = new MatTableDataSource<Todo>([]);
  paginatorOptions = appConfig.paginatorOptions;

  @Input() set todos(todos: Todo[]) {
    if (this.paginator?.pageSize) {
      this.paginator.pageSize = todos.length;
    }
    this.dataSource.data = todos;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onLoadTodos(): void {
    if (this.canLoadMoreItems) {
      this.loadTodos.emit({ offset: appConfig.itemsPerLoad });
    }
  }

  onDeleteTodos(todos: Todo[]): void {
    const todosToDelete: string[] = [];
    todos.forEach((todo) => todosToDelete.push(todo.uuid));
    this.deleteTodos.emit(todosToDelete);
  }

  onDeleteTodo(id: string): void {
    this.deleteTodo.emit(id);
  }

  onEditTodo(todo: Todo): void {
    this.editTodo.emit(todo);
  }

  onOpenTodos(todos: Todo[]): void {
    this.openTodos.emit(todos);
    this.dataSource.data.forEach((todo) => {
      this.todosSelection.deselect(todo);
    });
  }
}
