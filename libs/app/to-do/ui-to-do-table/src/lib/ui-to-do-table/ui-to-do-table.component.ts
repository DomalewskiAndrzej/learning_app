import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Todo, TodoLoad } from '@app/app/to-do/domain';
import { PageEvent } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { appConfig } from '@app/shared/resources';

@Component({
  selector: 'app-ui-to-do-table',
  templateUrl: './ui-to-do-table.component.html',
  styleUrls: ['./ui-to-do-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiToDoTableComponent {
  @Output() loadTodos = new EventEmitter<TodoLoad>();
  @Output() openTodos = new EventEmitter<Todo[]>();
  @Output() deleteTodos = new EventEmitter<string[]>();
  @Output() deleteTodo = new EventEmitter<string>();
  @Output() editTodo = new EventEmitter<Todo>();
  @Input() lastOpenedTodosUUID: string[];
  displayedColumns = appConfig.todoTableDisplayedColums;
  todosSelection = new SelectionModel<Todo>(true, []);
  dataSource: MatTableDataSource<Todo>;

  @Input() set todos(todos: Todo[]) {
    this.dataSource = new MatTableDataSource<Todo>(todos);
  }

  onLoadTodos(todoLoad: TodoLoad): void {
    this.loadTodos.emit(todoLoad);
  }

  onChange(page: PageEvent): void {
    const offset = page.pageSize - this.dataSource.data.length;
    if (offset > 0) {
      this.onLoadTodos({ offset });
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
